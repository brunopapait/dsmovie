package br.com.papait.bruno.dsmovie.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tb_score")
public class Score implements Serializable {

  @EmbeddedId
  private ScorePk id = new ScorePk();
  private Double value;

  public Score() {
  }

  public Score(ScorePk id, Double value) {
    this.id = id;
    this.value = value;
  }

  public void setMovie(Movie movie) {
    id.setMovie(movie);
  }

  public void setUser(User user) {
    id.setUser(user);
  }

  public ScorePk getId() {
    return id;
  }

  public void setId(ScorePk id) {
    this.id = id;
  }

  public Double getValue() {
    return value;
  }

  public void setValue(Double value) {
    this.value = value;
  }
}
