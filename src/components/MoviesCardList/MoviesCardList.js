import "./MoviesCardList.css";
import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoreFilmButton from "../MoviesCardList/MoreFilmButton/MoreFilmButton";
import MoviesCard from "./MoviesCard/MoviesCard";
import {
  WIDTH_1280PX,
  WIDTH_768PX,
  WIDTH_320PX,
  MAX_COUNT_ELEMENTS,
  TIMEOUT,
} from "../../utils/const";

export default function MoviesCardList(props) {
  const {
    movies,
    savedMovies,
    handleSaveMovieClick,
    handleDeleteSavedMovieClick,
  } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const [maxElementsCount, setMaxElementsCount] = useState(MAX_COUNT_ELEMENTS);
  const [showedMovies, setShowedMovies] = useState([]);
  const location = useLocation();

  function handleSetTimeout() {
    setTimeout(() => setWidth(window.innerWidth), TIMEOUT)
  }

  useEffect(() => {
    window.addEventListener("resize", handleSetTimeout);
    return () => window.removeEventListener("resize", handleSetTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleMoreClick() {
    if (maxElementsCount < movies.length) {
      if (width < WIDTH_768PX.width) {
        setMaxElementsCount(maxElementsCount + WIDTH_768PX.addCount);
      } else {
        setMaxElementsCount(maxElementsCount + WIDTH_1280PX.addCount);
      }
    }
  }

  function handleElementCount() {
    if (width < WIDTH_320PX.width) {
      setMaxElementsCount(WIDTH_320PX.count);
    } else if (width < WIDTH_768PX.width) {
      setMaxElementsCount(WIDTH_768PX.count);
    } else {
      setMaxElementsCount(WIDTH_1280PX.count);
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      handleElementCount();
    }
    renderMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, width, location]);

  function renderMovies() {
    let array = [];
    movies.forEach((item, i) => {
      if (i < maxElementsCount) {
        array.push(item);
      }
    });
    setShowedMovies(array);
  }

  useEffect(() => {
    renderMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, maxElementsCount]);

  return (
    <section className="movies-list">
      <div className="movies-list__grid">
        {showedMovies.map((movie) => (
          <div key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              savedMovies={savedMovies}
              onSaveMovieClick={handleSaveMovieClick}
              onDeleteMovieClick={handleDeleteSavedMovieClick}
            />
          </div>
        ))}
      </div>
      {movies.length !== showedMovies.length &&
      location.pathname === "/movies" ? (
        <MoreFilmButton onClick={handleMoreClick} />
      ) : (
        ""
      )}
    </section>
  );
}
