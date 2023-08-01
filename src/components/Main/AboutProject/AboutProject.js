import "./AboutProject.css";
import MainBlocks from "../MainBlocks/MainBlocks";

export default function AboutProject(props) {
  return (
    <MainBlocks
      title="О проекте"
      name="about-project"
      arialabel="Информация о проекте"
    >
      <div className="about-project">
        <div className="about-project__info">
          <div className="about-project__container">
            <p className="about-project__title">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__container">
            <p className="about-project__title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__progress">
          <div className="about-project__segment about-project__segment_type_one-week">
            <p className="about-project__text about-project__text_type_one-week">
              1 неделя
            </p>
          </div>
          <div className="about-project__segment about-project__segment_type_four-weeks">
            <p className="about-project__text about-project__text_type_four-weeks">
              4 недели
            </p>
          </div>
          <div className="about-project__segment">
            <p className="about-project__text">Back-end</p>
          </div>
          <div className="about-project__segment">
            <p className="about-project__text">Front-end</p>
          </div>
        </div>
      </div>
    </MainBlocks>
  );
}
