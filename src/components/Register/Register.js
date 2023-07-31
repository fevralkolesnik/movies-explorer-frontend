import "./Register.css";
import React from 'react';
import Form from "../Form/Form";

export default function Register (props) {
    return (
        <Form 
        title="Добро пожаловать!" 
        name="register" 
        buttonText="Зарегистрироваться" 
        text="Уже зарегистрированы?" 
        route="/signin" 
        linkText="Войти">
            <label className="form__form-field">Имя
                <input
                className="form__input"
                type="text"
                id="registerName"
                name="registerName"
                placeholder="Виталий"
                required
                minLength="2"
                maxLength="30"
                />
                <span className="form__input-error registerName-error"></span>
            </label>

            <label className="form__form-field">E-mail
                <input
                className="form__input"
                type="email"
                id="registerEmail"
                name="registerEmail"
                placeholder="pochta@yandex.ru|"
                required
                />
                <span className="form__input-error registerEmail-error"></span>
            </label>

            <label className="form__form-field">Пароль
                <input
                className="form__input"
                type="password"
                id="registerPassword"
                name="registerPassword"
                placeholder="••••••••••••••"
                required
                />
                <span className="form__input-error registerPassword-error">Что-то пошло не так...</span>
            </label>
        </Form>
    )
}