package learn.queens_gambit.data;

import learn.queens_gambit.data.mappers.CharacterMapper;
import learn.queens_gambit.models.Character;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.*;
import java.util.List;
@Repository
public class CharacterJdbcTemplateRepository implements CharacterRepository {

    private final JdbcTemplate jdbcTemplate;

    public CharacterJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Character> findAll() {
        final String sql = "select character_id, first_name, last_name "
                + "from characters limit 1000;";
        return jdbcTemplate.query(sql, new CharacterMapper());
    }

    @Override
    @Transactional
    public Character findById(Long character_id) {

        final String sql = "select character_id, first_name, last_name "
                + "from characters "
                + "where character_id = ?;";

        Character character = jdbcTemplate.query(sql, new CharacterMapper(), character_id).stream()
                .findFirst().orElse(null);

        return character;
    }

    @Override
    public Character add(Character character) {

        final String sql = "insert into characters (first_name, last_name)"
                + " values (?,?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, character.getFirstName());
            ps.setString(2, character.getLastName());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        character.setCharacterId(keyHolder.getKey().longValue());
        return character;
    }

    @Override
    public boolean update(Character character) {

        final String sql = "update characters set first_name = ?, last_name = ? where character_id = ?;";
        int res = jdbcTemplate.update(sql, character.getFirstName(), character.getLastName(), character.getCharacterId());
        if (res == 1){
            return true;
        }else {
            return false;
        }

    }

    @Override
    @Transactional
    public boolean deleteById(Long characterId) {
        return jdbcTemplate.update("delete from characters where character_id = ?;", characterId) > 0;
    }
}
