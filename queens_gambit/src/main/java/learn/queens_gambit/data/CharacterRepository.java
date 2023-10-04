package learn.queens_gambit.data;

import java.util.List;

public interface CharacterRepository {

    List<Character> findAll();

    Character add(Character character);
}
