import "./Login.css";
import React from 'react';
import Form from "../Form/Form";

export default function Login (props) {
    return (
        <Form 
        title="Рады видеть!" 
        name="login" 
        buttonText="Войти" 
        text="Ещё не зарегистрированы?" 
        route="/signup" 
        linkText="Регистрация">
            <label className="form__form-field">E-mail
                <input
                className="form__input"
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="pochta@yandex.ru|"
                required
                />
                <span className="form__input-error loginEmail-error"></span>
            </label>

            <label className="form__form-field">Пароль
                <input
                className="form__input"
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="••••••••••••••"
                required
                />
                <span className="form__input-error loginPassword-error"></span>
            </label>
        </Form>
    )
}