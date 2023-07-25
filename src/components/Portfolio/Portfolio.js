import "./Portfolio.css";
import Project from "./Project/Project";

export default function Portfolio (props) {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2> 
            <Project name="Статичный сайт" />
            <Project name="Адаптивный сайт"/>
            <Project name="Одностраничное приложение"/>
        </div>
    );
}