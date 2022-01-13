package br.com.papait.bruno.dsmovie.controllers;

import br.com.papait.bruno.dsmovie.dto.MovieDTO;
import br.com.papait.bruno.dsmovie.dto.ScoreDTO;
import br.com.papait.bruno.dsmovie.repositories.ScoreRepository;
import br.com.papait.bruno.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

  @Autowired
  private ScoreService scoreService;

  @PutMapping
  public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
    return scoreService.saveScore(scoreDTO);
  }
}
