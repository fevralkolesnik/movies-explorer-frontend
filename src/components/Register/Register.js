import "./Register.css";
import {React, useState} from "react";
import Form from "../Form/Form";

export default function Register(props) {
  const {onRegister} = props;

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(formValue.name, formValue.email, formValue.password);
  }

  return (
    <Form
      title="Добро пожаловать!"
      name="register"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      route="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
    >
      <label className="form__form-field">
        Имя
        <input
          className="form__input"
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
          placeholder="Имя"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="form__input-error registerName-error"></span>
      </label>

      <label className="form__form-field">
        E-mail
        <input
          className="form__input"
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <span className="form__input-error registerEmail-error"></span>
      </label>

      <label className="form__form-field">
        Пароль
        <input
          className="form__input"
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
        />
        <span className="form__input-error registerPassword-error"></span>
      </label>
    </Form>
  );
}
