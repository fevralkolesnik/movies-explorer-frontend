import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Movies(props) {
  const {
    movies,
    savedMovies,
    errorText,
    onSearchFormSubmit,
    onSaveMovieClick,
    onDeleteMovieClick,
    onNavigatorClick,
    preloaderStatus,
  } = props;

  return (
    <div className="movies">
      <Header handleNavigatorClick={onNavigatorClick} />
      <main className="movies__main">
        <SearchForm onSearchMovie={onSearchFormSubmit} />
        {preloaderStatus ? (
          <Preloader />
        ) : errorText ? (
          <span className="movies__error">{errorText}</span>
        ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            handleSaveMovieClick={onSaveMovieClick}
            handleDeleteSavedMovieClick={onDeleteMovieClick}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
