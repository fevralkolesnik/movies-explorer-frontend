import "./MoreFilmButton.css";
import React from "react";

export default function MoreFilmButton(props) {
  const {onClick} = props;
  
  return (
    <div className="more-film">
      <button className="more-film__button" type="button" onClick={onClick}>Ещё</button>
    </div>
  );
}
