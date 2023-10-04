package learn.queens_gambit.data;

import learn.queens_gambit.models.Fan;

import java.util.List;

public interface FanRepository {
    public List<Fan> findAll();
}
