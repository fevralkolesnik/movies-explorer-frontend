import "./SavedMovies.css";
import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies(props) {
  const {
    movies,
    savedMovies,
    onSearchFormSubmit,
    onSaveMovieClick,
    onDeleteMovieClick,
    onNavigatorClick,
  } = props;

  return (
    <div className="saved-movies">
      <Header handleNavigatorClick={onNavigatorClick} />
      <main className="saved-movies__main">
        <SearchForm onSearchMovie={onSearchFormSubmit} />

        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          handleSaveMovieClick={onSaveMovieClick}
          handleDeleteSavedMovieClick={onDeleteMovieClick}
        />
        <div className="saved-movies__block"></div>
      </main>
      <Footer />
    </div>
  );
}
