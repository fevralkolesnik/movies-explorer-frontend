import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  const {
    movies,
    savedMovies,
    handleSaveMovieClick,
    handleDeleteSavedMovieClick,
  } = props;

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <div key={movie.id || movie._id}>
          <MoviesCard
            movie={movie}
            savedMovies={savedMovies}
            onSaveMovieClick={handleSaveMovieClick}
            onDeleteMovieClick={handleDeleteSavedMovieClick}
          />
          
          {/* <Link to={card.trailerLink} target="_blank" className="cards__link">
            <MoviesCard
              card={card}
              onSaveMovieClick={handleSaveMovieClick}
              onDeleteMovieClick={handleDeleteSavedMovieClick}
            />
          </Link> */}
        </div>
      ))}
    </section>
  );
}
