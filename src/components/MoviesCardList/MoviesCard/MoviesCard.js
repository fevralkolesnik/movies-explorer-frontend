import "./MoviesCard.css";
import { React, useState } from "react";

export default function MoviesCard(props) {
  const { card, savedMovies } = props;

  const [isFilmAdded, setIsFilmAdded] = useState(false);

  function filmDuration(duration) {
    const hour = duration / 60;
    if (hour < 1) {
      return `${duration}м`;
    } else {
      const min = (hour - Math.trunc(hour)) * 60;
      return `${Math.trunc(hour)}ч ${Math.round(min)}м`;
    }
  }

  function hanldeButtonClick() {
    setIsFilmAdded(!isFilmAdded);
  }

  return (
    <article className="card">
      {savedMovies ? (
        <button
          className="card__button card__button_type_delete"
          onClick={hanldeButtonClick}
        ></button>
      ) : (
        <button
          className={`card__button ${
            isFilmAdded ? "card__button_type_added" : "card__button_type_save"
          }`}
          onClick={hanldeButtonClick}
        >
          {isFilmAdded ? "" : "Сохранить"}
        </button>
      )}
      <img className="card__image" src={card.image} alt={card.nameRU} />
      <div className="card__container">
        <p className="card__name">{card.nameRU}</p>
        <p className="card__time">{filmDuration(card.duration)}</p>
      </div>
    </article>
  );
}
