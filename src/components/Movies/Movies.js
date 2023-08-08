import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Movies(props) {
  const { movies, savedMovies, onSearchFormSubmit, onSaveMovieClick, onDeleteMovieClick, onNavigatorClick } =
    props;

  return (
    <div className="movies">
      <Header handleNavigatorClick={onNavigatorClick} />
      <main className="movies__main">
        <SearchForm onSearchMovie={onSearchFormSubmit} />
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          handleSaveMovieClick={onSaveMovieClick}
          handleDeleteSavedMovieClick={onDeleteMovieClick}
        />
      </main>
      <Footer />
    </div>
  );
}
