import MovieStars from '../MovieStars';
import './styles.css';

const movie = {
  id: 1,
  image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  count: 2,
  score: 4.5
};

export default function MovieScore() {
  return (
      <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{movie.count} avaliações</p>
    </div>
  );
};