import "./Register.css";
import {React} from "react";
import Form from "../Form/Form";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Register(props) {
  const {onRegister} = props;
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values.name, values.email, values.password);
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
      isValid={isValid}
    >
      <label className="form__form-field">
        Имя
        <input
          className="form__input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Имя"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="form__input-error">{errors.name}</span>
      </label>

      <label className="form__form-field">
        E-mail
        <input
          className="form__input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>

      <label className="form__form-field">
        Пароль
        <input
          className="form__input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
          minLength="6"
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}
