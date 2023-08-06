import "./Login.css";
import {React, useState} from "react";
import Form from "../Form/Form";

export default function Login(props) {
  const {onLogin} = props;

  const [formValue, setFormValue] = useState({
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

    onLogin(formValue.email, formValue.password);
  }

  return (
    <Form
      title="Рады видеть!"
      name="login"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      route="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
    >
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
        <span className="form__input-error loginEmail-error"></span>
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
        <span className="form__input-error loginPassword-error"></span>
      </label>
    </Form>
  );
}
