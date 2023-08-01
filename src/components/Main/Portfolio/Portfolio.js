import "./Portfolio.css";
import Project from "../Project/Project";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Project
        name="Статичный сайт"
        route="https://github.com/fevralkolesnik/how-to-learn"
      />
      <Project
        name="Адаптивный сайт"
        route="https://fevralkolesnik.github.io/russian-travel/"
      />
      <Project
        name="Одностраничное приложение"
        route="https://front.mesto.fevralkolesni.nomoreparties.sbs/"
      />
    </div>
  );
}
