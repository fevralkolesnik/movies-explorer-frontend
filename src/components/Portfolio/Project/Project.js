import "./Project.css";
import arrow from "../../../images/text__COLOR_font-main.svg";

export default function Project (props) {
    const {name} = props;

    return (
        <div className="project">
            <p className="project__name">{name}</p>
            <img className="project__image" src={arrow} alt="Стрелка" />
        </div>
    );
}