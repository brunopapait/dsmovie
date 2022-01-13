package br.com.papait.bruno.dsmovie.services;

import br.com.papait.bruno.dsmovie.dto.MovieDTO;
import br.com.papait.bruno.dsmovie.entities.Movie;
import br.com.papait.bruno.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

  @Autowired
  private MovieRepository movieRepository;

  @Transactional(readOnly = true)
  public Page<MovieDTO> findAll(Pageable pageable) {
    Page<Movie> pageMovies = movieRepository.findAll(pageable);
    return pageMovies.map(pageMovie -> new MovieDTO(pageMovie));
  }

  @Transactional(readOnly = true)
  public MovieDTO findById(Long id) {
    Movie movie = movieRepository.findById(id).get();
    MovieDTO movieDTO = new MovieDTO(movie);
    return movieDTO;
  }
}
