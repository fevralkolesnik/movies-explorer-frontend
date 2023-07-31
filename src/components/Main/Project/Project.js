import "./Project.css";
import { Link } from "react-router-dom";
import arrow from "../../../images/text__COLOR_font-main.svg";

export default function Project(props) {
  const { name, route } = props;

  return (
    <Link to={route} className="project" target="_blank">
      <p className="project__name">{name}</p>
      <img className="project__image" src={arrow} alt="Стрелка" />
    </Link>
  );
}
