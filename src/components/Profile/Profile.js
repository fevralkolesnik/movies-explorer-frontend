import "./Profile.css";
import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../Header/Header";

export default function Profile (props) {
    const {onNavigatorClick} = props;

    return (
        <main>
            <Header handleNavigatorClick={onNavigatorClick}/>
            <div className="profile">
                <div className="profile__container">
                    <h1 className='profile__title'>Привет, Виталий!</h1>
                    <form className='profile__form'>
                        <label className="profile__label">Имя
                            <input className="profile__input" placeholder="Виталий"/>
                        </label>
                        <label className="profile__label">E-mail
                            <input className="profile__input" placeholder="pochta@yandex.ru"/>
                        </label>
                        <button type="submit" className="profile__submit-button">Редактировать</button>
                        <Link to="/">
                            <button type="button" className="profile__exit-button">Выйти из аккаунта</button>
                        </Link>
                    </form>
                </div>
            </div>
            
        </main>
    )
}