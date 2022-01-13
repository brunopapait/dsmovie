package br.com.papait.bruno.dsmovie.repositories;

import br.com.papait.bruno.dsmovie.entities.Score;
import br.com.papait.bruno.dsmovie.entities.ScorePk;
import br.com.papait.bruno.dsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePk> {
}
