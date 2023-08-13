import "./Login.css";
import {React} from "react";
import Form from "../Form/Form";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Login(props) {
  const {onLogin} = props;
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values.email, values.password);
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
      isValid={isValid}
    >
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
