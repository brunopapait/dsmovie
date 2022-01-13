package br.com.papait.bruno.dsmovie.services;

import br.com.papait.bruno.dsmovie.dto.MovieDTO;
import br.com.papait.bruno.dsmovie.dto.ScoreDTO;
import br.com.papait.bruno.dsmovie.entities.Movie;
import br.com.papait.bruno.dsmovie.entities.Score;
import br.com.papait.bruno.dsmovie.entities.User;
import br.com.papait.bruno.dsmovie.repositories.MovieRepository;
import br.com.papait.bruno.dsmovie.repositories.ScoreRepository;
import br.com.papait.bruno.dsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

  @Autowired
  private MovieRepository movieRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ScoreRepository scoreRepository;

  @Transactional
  public MovieDTO saveScore(ScoreDTO scoreDTO) {
    User user = userRepository.findByEmail(scoreDTO.getEmail());

    if (user == null) {
      user = new User();
      user.setEmail(scoreDTO.getEmail());

      user = userRepository.saveAndFlush(user);
    }

    Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();


    Score score = new Score();

    score.setMovie(movie);
    score.setUser(user);
    score.setValue(scoreDTO.getScore());

    scoreRepository.saveAndFlush(score);

    double sum = 0.0;
    for (Score s : movie.getScores()) {
      sum += s.getValue();
    }
    double scoreAvg = sum / movie.getScores().size();

    movie.setScore(scoreAvg);
    movie.setCount(movie.getScores().size());

    movie = movieRepository.saveAndFlush(movie);

    return new MovieDTO(movie);
  }
}
