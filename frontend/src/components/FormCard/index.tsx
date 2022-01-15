import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api";
import { Movie } from "../../types/movie";
import { validateEmail } from "../../utils/validateEmail";
import "./styles.css";

type Props = {
  movieId: string;
};

export default function FormCard({ movieId }: Props) {
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    api.get(`/movies/${+movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const score = (e.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    api.put(`/scores`, { movieId, email, score }).then((response) => {
      navigate("/");
    });
  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}
