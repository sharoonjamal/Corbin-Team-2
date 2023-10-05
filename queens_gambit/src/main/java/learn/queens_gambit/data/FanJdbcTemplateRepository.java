package learn.queens_gambit.data;

import learn.queens_gambit.data.mappers.CharacterMapper;
import learn.queens_gambit.data.mappers.FanMapper;
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

    public FanJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Fan> findAll() {
        final String sql = "select `id`, `first_name`, `last_name` from `fans` limit 1000;";
        return jdbcTemplate.query(sql, new FanMapper());
    }

    @Override
    @Transactional
    public Fan findById(Long fanId) {

        final String sql = "select `id`, `first_name`, `last_name` from fans where id = ?;";

        Fan fan = jdbcTemplate.query(sql, new FanMapper(), fanId).stream()
                .findFirst().orElse(null);

        return fan;
    }

    @Override
    public Fan add(Fan fan) {

        final String sql = "insert into fans (first_name, last_name) values (?,?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, fan.getFirstName());
            ps.setString(2, fan.getLastName());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        fan.setId(keyHolder.getKey().longValue());
        return fan;
    }

    @Override
    public boolean update(Fan fan) {

        final String sql = "update fans set first_name = ?, last_name = ? where id = ?;";
        return jdbcTemplate.update(sql,
                fan.getFirstName(),
                fan.getLastName(),
                fan.getId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(Long fanId) {
        return jdbcTemplate.update("delete from fans where id = ?;", fanId) > 0;
    }
}
