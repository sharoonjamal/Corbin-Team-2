package learn.queens_gambit.controllers;

import learn.queens_gambit.domain.Result;
import learn.queens_gambit.domain.CharacterService;
import learn.queens_gambit.models.Character;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private final CharacterService service;

    public CharacterController(CharacterService characterService) {
        this.service = characterService;
    }

    @GetMapping
    public List<Character> findAll() {
        return service.findAll();
    }

    @GetMapping("/{characterId}")
    public Character findById(@PathVariable Long characterId) {
        return service.findById(characterId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Character character) {
        Result<Character> result = service.add(character);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);  // Ensure ErrorResponse is adapted for Character
    }

    @PutMapping("/{characterId}")
    public ResponseEntity<Object> update(@PathVariable long characterId, @RequestBody Character character) {
        character.setCharacterId(characterId);
        Result<Character> result = service.update(character);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);  // Ensure ErrorResponse is adapted for Character
    }

    @DeleteMapping("/{characterId}")
    public ResponseEntity<Void> deleteById(@PathVariable Long characterId) {
        if (service.deleteById(characterId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
