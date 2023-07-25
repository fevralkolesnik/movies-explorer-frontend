import "./Footer.css";

export default function Footer (props) {
    return (
        <footer className="footer">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__nav">
                <p className="footer__text">&copy; 2020</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target="_blank">Github</a>
                </div>
            </div>
        </footer>
    )
}