package br.com.papait.bruno.dsmovie.repositories;

import br.com.papait.bruno.dsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
