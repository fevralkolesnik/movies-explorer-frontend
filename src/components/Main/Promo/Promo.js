import "./Promo.css";
import promoImage from "../../../images/promo-image.svg";

export default function PromiseConstructor(props) {
  return (
    <section className="promo" aria-label="Интро в проект">
      <img className="promo__image" src={promoImage} alt="Веб-планета" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a className="promo__button" href="#about-project">
        Узнать больше
      </a>
    </section>
  );
}
