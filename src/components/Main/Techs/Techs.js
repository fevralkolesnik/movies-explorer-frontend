import "./Techs.css";
import MainBlocks from "../MainBlocks/MainBlocks";

export default function Techs(props) {
  return (
    <MainBlocks
      title="Технологии"
      name="techs"
      arialabel="Использумые технологии"
    >
      <div className="techs">
        <p className="techs__title">7 технологий</p>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__stack">
          <div className="techs__block">
            <p className="techs__name">HTML</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">CSS</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">JS</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">React</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">Git</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">Express.js</p>
          </div>
          <div className="techs__block">
            <p className="techs__name">mongoDB</p>
          </div>
        </div>
      </div>
    </MainBlocks>
  );
}
