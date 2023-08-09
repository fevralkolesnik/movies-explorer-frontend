import "./Profile.css";
import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile(props) {
  const { notificationText, onUpdateUser, onLogOut, onNavigatorClick } = props;
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(values.name, values.email);
  }

  return (
    <div className="profile">
      <Header handleNavigatorClick={onNavigatorClick} />
      <main className="profile__main">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            className="profile__form"
            name="profile"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="profile__label">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                minLength="2"
                maxLength="30"
              />
              <span className="profile__input-error">{errors.name}</span>
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
              <span className="profile__input-error">{errors.email}</span>
            </label>
            <span className="profile__text">{notificationText}</span>
            <button
              type="submit"
              className={`profile__submit-button ${
                isValid ? "" : "profile__submit-button_disabled"
              }`}
              disabled={!isValid}
            >
              Редактировать
            </button>
            <Link to="/">
              <button
                type="button"
                className="profile__exit-button"
                onClick={onLogOut}
              >
                Выйти из аккаунта
              </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
