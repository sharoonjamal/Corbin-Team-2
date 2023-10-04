package learn.queens_gambit.data;

import learn.queens_gambit.data.mappers.FanMapper;
import learn.queens_gambit.models.Fan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FanJdbcTemplateRepository implements FanRepository {

    private final JdbcTemplate jdbcTemplate;

    public FanJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Fan> findAll() {
        final String sql = "select `id`, `first_name`, `last_name`"
                + "from `fans` limit 1000;";
        return jdbcTemplate.query(sql, new FanMapper());
    }
}
