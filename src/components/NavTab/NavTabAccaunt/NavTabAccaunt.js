import "./NavTabAccaunt.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../images/icon.svg";

export default function NavTabAccaunt(props) {
  const { onClick } = props;
  return (
    <Link to="/profile" className="accaunt" onClick={onClick}>
      <div className="accaunt__container">
        <p className="accaunt__link">Аккаунт</p>
        <div className="accaunt__icon-container">
          <img className="accaunt__icon" src={icon} alt="Иконка пользователя" />
        </div>
      </div>
    </Link>
  );
}
