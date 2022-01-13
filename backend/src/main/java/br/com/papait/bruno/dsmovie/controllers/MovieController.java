package br.com.papait.bruno.dsmovie.controllers;

import br.com.papait.bruno.dsmovie.dto.MovieDTO;
import br.com.papait.bruno.dsmovie.entities.Movie;
import br.com.papait.bruno.dsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

  @Autowired
  private MovieService movieService;

  @GetMapping
  public Page<MovieDTO> findAll(Pageable pageable) {
    return movieService.findAll(pageable);
  }

  @GetMapping(value = "/{id}")
  public MovieDTO findById(@PathVariable Long id) {
    return movieService.findById(id);
  }
}
