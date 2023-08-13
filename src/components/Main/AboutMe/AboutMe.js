import "./AboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import imageMe from "../../../images/pic__COLOR_pic.jpg";
import MainBlocks from "../MainBlocks/MainBlocks";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe(props) {
  return (
    <MainBlocks title="Студент" name="aboutme" arialabel="Резюме">
      <div className="aboutme">
        <p className="aboutme__name">Дарья</p>
        <p className="aboutme__brief">Фронтенд-разработчик, 23 лет</p>
        <p className="aboutme__description">
          Привет! Я родилась в городе Ефремов, Тульная область. Закончила
          физико-математический лицей с золотой медалью. Являюсь призером
          олимпиад по математике и программированию как в школе, так и в
          университете. Жажду развиваться как front-end разработчик! Из хобби
          хочется выделить вокал, сноубординг и волейбол.
        </p>
        <Link
          to="https://github.com/fevralkolesnik"
          className="aboutme__link"
          target="_blank"
        >
          Github
        </Link>
        <img
          className="aboutme__image"
          src={imageMe}
          alt="Фотография для резюме"
        />
      </div>
      <Portfolio />
    </MainBlocks>
  );
}
