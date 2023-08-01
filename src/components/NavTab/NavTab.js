import "./NavTab.css";
import React from "react";
import { NavLink } from "react-router-dom";
import NavTabAccaunt from "./NavTabAccaunt/NavTabAccaunt";

export default function NavTab(props) {
  const { onClick } = props;

  return (
    <div className="navtab">
      <div className="navtab__desktop">
        <div className="navtab__container">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navtab__link ${isActive ? "navtab__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navtab__link ${isActive ? "navtab__link_active" : ""}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>

        <NavTabAccaunt />
      </div>
      <div className="navtab__mobile" onClick={onClick}></div>
    </div>
  );
}
