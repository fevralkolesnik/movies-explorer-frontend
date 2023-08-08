import "./MoviesCard.css";
import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { BASE_MOVIES_URL } from "../../../utils/const";

export default function MoviesCard(props) {
  const { movie, savedMovies, onSaveMovieClick, onDeleteMovieClick } = props;
  const location = useLocation();

  const savedMovie = savedMovies.find((item) => item.movieId === movie.id);

  function submitMovie() {
    if (savedMovie) {
      onDeleteMovieClick(savedMovie._id);
    } else {
      onSaveMovieClick(movie);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovieClick(movie._id);
  }

  function filmDuration(duration) {
    const hour = duration / 60;
    if (hour < 1) {
      return `${duration}м`;
    } else {
      const min = (hour - Math.trunc(hour)) * 60;
      return `${Math.trunc(hour)}ч ${Math.round(min)}м`;
    }
  }

  return (
    <article className="movie">
      {location.pathname === "/saved-movies" ? (
        <button
          className="movie__button movie__button_type_delete"
          type="button"
          onClick={handleDeleteMovie}
        ></button>
      ) : (
        <button
          className={`movie__button ${
            savedMovie ? "movie__button_type_added" : "movie__button_type_save"
          }`}
          type="button"
          onClick={submitMovie}
        >
          {savedMovie ? "" : "Сохранить"}
        </button>
      )}
      <Link to={movie.trailerLink} target="_blank" className="movie__link">
        <img
          className="movie__image"
          src={
            location.pathname !== "/saved-movies"
              ? BASE_MOVIES_URL + movie.image.url
              : movie.image
          }
          alt={movie.nameRU}
        />
        <div className="movie__container">
          <p className="movie__name">{movie.nameRU}</p>
          <p className="movie__time">{filmDuration(movie.duration)}</p>
        </div>
      </Link>
    </article>
  );
}
