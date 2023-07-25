import "./AboutMe.css";
import imageMe from "../../images/pic__COLOR_pic.jpg";
import MainBlocks from "../MainBlocks/MainBlocks";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe (props) {
    return (
        <MainBlocks title="Студент" name="aboutme" arialabel="Резюме">
            <div className="aboutme">
                <p className="aboutme__name">Виталий</p>
                <p className="aboutme__brief">Фронтенд-разработчик, 30 лет</p>
                <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className="aboutme__link" href="https://github.com/fevralkolesnik" target="_blank">Github</a>
                <img className="aboutme__image" src={imageMe} alt="Фотография для резюме" /> 
            </div>
            <Portfolio />
        </MainBlocks>
    )
}