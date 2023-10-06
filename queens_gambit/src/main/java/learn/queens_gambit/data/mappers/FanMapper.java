package learn.queens_gambit.data.mappers;

import learn.queens_gambit.models.Fan;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FanMapper implements RowMapper<Fan> {
    @Override
    public Fan mapRow(ResultSet resultSet, int i) throws SQLException {
        Fan fan = new Fan();
        fan.setId(resultSet.getLong("id"));
        fan.setFirstName(resultSet.getString("first_name"));
        fan.setLastName(resultSet.getString("last_name"));
        fan.setEmail(resultSet.getString("email"));
        fan.setCountry(resultSet.getString("country"));
        fan.setFavoriteCharacterId(resultSet.getLong("favorite_character_id"));
        fan.setFideRating(resultSet.getLong("FIDE_rating"));
        return fan;
    }
}
