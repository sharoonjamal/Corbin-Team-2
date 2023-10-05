package learn.queens_gambit.domain;

import learn.queens_gambit.data.FanRepository;
import learn.queens_gambit.models.Fan;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FanService {

    private final FanRepository repository;

    public FanService(FanRepository repository) {this.repository = repository;}

    public List<Fan> findAll() {return repository.findAll();}

    public Fan findById(Long fanId) {return repository.findById(fanId);}

    public Result<Fan> add(Fan fan) {
        Result<Fan> result = validate(fan);
        if (!result.isSuccess()) {
            return result;
        }

        if (null!= fan.getId()) {
            result.addMessage("fanId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        fan = repository.add(fan);
        result.setPayload(fan);
        return result;
    }

    public Result<Fan> update(Fan fan) {
        Result<Fan> result = validate(fan);
        if (!result.isSuccess()) {
            return result;
        }

        if (fan.getId() <= 0) {
            result.addMessage("fanId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(fan)) {
            String msg = String.format("fanId: %s, not found", fan.getId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(Long fanId) {return repository.deleteById(fanId);}

    private Result<Fan> validate(Fan fan) {
        // Implement validation logic
        // Check for null values, empty strings, etc.
        // Return a Result<Fan> object accordingly
        return new Result<>();  // Placeholder: adjust accordingly
    }
}
