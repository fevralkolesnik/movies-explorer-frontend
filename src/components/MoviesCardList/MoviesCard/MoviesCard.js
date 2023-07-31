import "./MoviesCard.css";
import { React, useState } from "react";

export default function MoviesCard (props) {
    const {card} = props;

    const [isFilmAdded, setIsFilmAdded] = useState(false);

    function filmDuration (duration) {
        const hour = duration / 60;
        if (hour < 1) {
            return `${duration}м`;
        }
        else {
            const min = (hour - Math.trunc(hour)) * 60;
            return `${Math.trunc(hour)}ч ${Math.round(min)}м`;
        }
    }

    function hanldeButtonClick() {
        setIsFilmAdded(!isFilmAdded);
    }



    return (
        <article className="card">
            <button className={`card__add-button ${isFilmAdded ? "card__add-button_added" : ""}`} 
            onClick={hanldeButtonClick}>
                {isFilmAdded ? '' : 'Сохранить'}
            </button>
            <img className="card__image" src={card.image} alt={card.nameRU} />
            <div className="card__container">
                <p className="card__name">{card.nameRU}</p>
                <p className="card__time">{filmDuration(card.duration)}</p>
            </div>
        </article>
    )
}