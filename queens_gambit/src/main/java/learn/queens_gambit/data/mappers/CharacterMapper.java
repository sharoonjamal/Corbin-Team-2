package learn.queens_gambit.data.mappers;

import learn.queens_gambit.models.Character;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CharacterMapper implements RowMapper<Character> {
    @Override
    public Character mapRow(ResultSet resultSet, int i) throws SQLException {
        Character character = new Character();
        character.setCharacterId(resultSet.getLong("character_id"));
        character.setFirstName(resultSet.getString("first_name"));
        character.setLastName(resultSet.getString("last_name"));
        return character;
    }
}
