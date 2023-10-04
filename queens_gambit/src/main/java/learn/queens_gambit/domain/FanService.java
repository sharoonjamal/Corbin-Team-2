package learn.queens_gambit.domain;

import learn.queens_gambit.data.FanRepository;
import learn.queens_gambit.models.Fan;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FanService {
    private FanRepository repository;

    public FanService(FanRepository repository) {this.repository = repository;}

    public List<Fan> findAll() {return repository.findAll();}
    // Other service methods...
}
