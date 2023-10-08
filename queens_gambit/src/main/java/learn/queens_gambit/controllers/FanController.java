package learn.queens_gambit.controllers;

import learn.queens_gambit.domain.FanService;
import learn.queens_gambit.domain.Result;
import learn.queens_gambit.models.Fan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fans")
public class FanController {

    private final FanService service;

    public FanController(FanService service) {this.service = service;}

    @GetMapping
    public List<Fan> findAll() {
        return service.findAll();
    }

    @GetMapping("/{fanId}")
    public Fan findById(@PathVariable Long fanId) {
        return service.findById(fanId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Fan fan) {
        Result<Fan> result = service.add(fan);
        System.out.println(fan);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(result.getMessages(), HttpStatus.BAD_REQUEST);  // Ensure ErrorResponse is adapted for Fan
    }

    @PutMapping("/{fanId}")
    public ResponseEntity<Object> update(@PathVariable Long fanId, @RequestBody Fan fan) {
        fan.setId(fanId);
        Result<Fan> result = service.update(fan);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);  // Ensure ErrorResponse is adapted for Fan
    }

    @DeleteMapping("/{fanId}")
    public ResponseEntity<Void> deleteById(@PathVariable Long fanId) {
        if (service.deleteById(fanId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
