package learn.queens_gambit.data;

import org.springframework.transaction.annotation.Transactional;
import learn.queens_gambit.models.Character;
import java.util.List;

public interface CharacterRepository {

    List<Character> findAll();

    Character findById(Long character_id);

    Character add(Character character);

    boolean update(Character character);

    @Transactional
    boolean deleteById(Long id);
}
