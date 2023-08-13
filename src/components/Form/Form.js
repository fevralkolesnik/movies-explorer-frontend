import "./Form.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Form(props) {
  const { title, name, buttonText, text, route, linkText, onSubmit, isValid, children } = props;

  return (
    <section className="form">
      <Link to="/" className="form__logo">
        <img src={logo} alt="Логотип" />
      </Link>

      <h1 className="form__title">{title}</h1>

      <form className="form__form " name={name} onSubmit={onSubmit} noValidate>
        {children}

        <button
          className={`form__submit-button form__submit-button_type_${name} ${isValid ? '' : 'form__submit-button_disabled'}`}
          type="submit"
          aria-label="Отправить форму"
          disabled={!isValid}
        >
          {buttonText}
        </button>
      </form>

      <div className="form__container">
        <p className="form__text">{text}</p>
        <Link className="form__link" to={route}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}
