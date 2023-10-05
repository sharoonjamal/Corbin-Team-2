package learn.queens_gambit.domain;

import learn.queens_gambit.data.CharacterRepository;
import learn.queens_gambit.models.Character;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CharacterService {

    private final CharacterRepository repository;

    public CharacterService(CharacterRepository repository) {this.repository = repository;}

    public List<Character> findAll() {return repository.findAll();}

    public Character findById(Long characterId) {return repository.findById(characterId);}

    public Result<Character> add(Character character) {
        Result<Character> result = validate(character);
        if (!result.isSuccess()) {
            return result;
        }

        if (character.getCharacterId() != null) {
            result.addMessage("characterId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        character = repository.add(character);
        result.setPayload(character);
        return result;
    }

    public Result<Character> update(Character character) {
        Result<Character> result = validate(character);
        if (!result.isSuccess()) {
            return result;
        }

        if (character.getCharacterId() <= 0) {
            result.addMessage("characterId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(character)) {
            String msg = String.format("characterId: %s, not found", character.getCharacterId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(Long characterId) {
        return repository.deleteById(characterId);
    }

    private Result<Character> validate(Character character) {
        // Implement validation logic
        // Check for null values, empty strings, etc.
        // Return a Result<Character> object accordingly
        return new Result<>();  // Placeholder: adjust accordingly
    }
}
