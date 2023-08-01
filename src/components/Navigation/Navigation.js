import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";
import NavTabAccaunt from "../NavTab/NavTabAccaunt/NavTabAccaunt";

export default function Navigation(props) {
  const { isOpen, onClose } = props;
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="закрыть меню"
          onClick={onClose}
        />
        <nav className="popup__links">
          <div className="popup__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `popup__link ${isActive ? "popup__link_active" : ""}`
              }
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `popup__link ${isActive ? "popup__link_active" : ""}`
              }
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `popup__link ${isActive ? "popup__link_active" : ""}`
              }
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavTabAccaunt onClick={onClose} />
        </nav>
      </div>
    </section>
  );
}
