package learn.queens_gambit.controllers;

import learn.queens_gambit.domain.FanService;
import learn.queens_gambit.models.Fan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fans")
public class FanController {
    @Autowired
    private FanService fanService;

    @GetMapping
    public ResponseEntity<List<Fan>> getAllFans() {
        return ResponseEntity.ok(fanService.findAll());
    }
    // Other controller methods for CRUD...
}
