import "./Profile.css";
import { React, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

export default function Profile(props) {
  const { notificationText, onUpdateUser, onLogOut, onNavigatorClick } = props;

  const currentUser = useContext(CurrentUserContext);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    setFormValue({
      ...formValue,
      name: currentUser.name,
      email: currentUser.email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (formValue[name] !== currentUser[name]) {
      setSubmitDisabled(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(formValue.name, formValue.email);

    setSubmitDisabled(true);
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
          >
            <label className="profile__label">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                required
                minLength="2"
                maxLength="30"
              />
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                required
              />
            </label>
            <span className="profile__text">{notificationText}</span>
            <button
              type="submit"
              className={`profile__submit-button ${
                submitDisabled ? "profile__submit-button_disabled" : ""
              }`}
              disabled={submitDisabled}
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
