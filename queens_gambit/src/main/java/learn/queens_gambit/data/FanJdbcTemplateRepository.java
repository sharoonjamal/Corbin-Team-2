package learn.queens_gambit.data;

import learn.queens_gambit.data.mappers.FanMapper;
import learn.queens_gambit.models.Character;
import learn.queens_gambit.models.Fan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class FanJdbcTemplateRepository implements FanRepository {

    private final JdbcTemplate jdbcTemplate;

    private final CharacterRepository characterRepository;

    public FanJdbcTemplateRepository(JdbcTemplate jdbcTemplate, CharacterRepository characterRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.characterRepository = characterRepository;
    }

    @Override
    public List<Fan> findAll() {
        final String sql = "select `id`, `first_name`, `last_name`, email, country, favorite_character_id, FIDE_rating from `fans` limit 1000;";
        List<Fan> fans = jdbcTemplate.query(sql, new FanMapper());
        for (Fan fan:
             fans) {
            Character favoriteCharacter = characterRepository.findById(fan.getFavoriteCharacterId());
            fan.setFavoriteCharacter(favoriteCharacter);
        }
        return fans;
    }

    @Override
    @Transactional
    public Fan findById(Long fanId) {

        final String sql = "select `id`, `first_name`, `last_name`, email, country, favorite_character_id, FIDE_rating from fans where id = ?;";

        Fan fan = jdbcTemplate.query(sql, new FanMapper(), fanId).stream()
                .findFirst().orElse(null);

        Character favoriteCharacter = characterRepository.findById(fan.getFavoriteCharacterId());
        fan.setFavoriteCharacter(favoriteCharacter);

        return fan;
    }

    @Override
    public Fan add(Fan fan) {

        final String sql = "insert into fans (first_name, last_name, email, country, favorite_character_id, FIDE_rating) values (?,?,?,?,?,?);";


        Character favoriteCharacter = characterRepository.findById(fan.getFavoriteCharacterId());


        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, fan.getFirstName());
            ps.setString(2, fan.getLastName());
            ps.setString(3, fan.getEmail());
            ps.setString(4, fan.getCountry());
            ps.setLong(5, fan.getFavoriteCharacterId());
            ps.setLong(6, fan.getFideRating());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        fan.setId(keyHolder.getKey().longValue());
        fan.setFavoriteCharacter(favoriteCharacter);
        return fan;
    }

    @Override
    public boolean update(Fan fan) {

        final String sql = "update fans set first_name = ?, last_name = ?, email = ?, country = ?, favorite_character_id = ?, FIDE_rating = ? where id = ?;";
        return jdbcTemplate.update(sql,
                fan.getFirstName(),
                fan.getLastName(),
                fan.getEmail(),
                fan.getCountry(),
                fan.getFavoriteCharacterId(),
                fan.getFideRating(),
                fan.getId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(Long fanId) {
        return jdbcTemplate.update("delete from fans where id = ?;", fanId) > 0;
    }
}
