package learn.queens_gambit.domain;

import learn.queens_gambit.data.CharacterRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CharacterService {
    private CharacterRepository repository;

    public List<Character> findAll() {return repository.findAll();}
    // Other service methods...
}
