import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__nav">
        <p className="footer__text">&copy; 2020</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru/"
            className="footer__link"
            target="_blank"
          >
            Яндекс.Практикум
          </Link>

          <Link
            to="https://github.com/"
            className="footer__link"
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
