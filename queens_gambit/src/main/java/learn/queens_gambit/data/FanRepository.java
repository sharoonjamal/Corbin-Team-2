package learn.queens_gambit.data;

import learn.queens_gambit.models.Fan;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FanRepository {
    List<Fan> findAll();

    Fan findById(Long id);

    Fan add(Fan fan);

    boolean update(Fan fan);

    @Transactional
    boolean deleteById(Long Id);
}

