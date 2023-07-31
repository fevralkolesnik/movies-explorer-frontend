import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import NavTabAuth from '../NavTab/NavTabAuth';
import logo from '../../images/logo.svg';

export default function Header(props) {
    const {main, isAuth, handleNavigatorClick} = props;
    return(
        <header className={`header ${main ? "header_type_main" : ""}`}>
            <Link to="/" className="header__logo">
                <img src={logo} alt="Лого" />
            </Link>
            {isAuth ? <NavTabAuth /> : <NavTab onClick={handleNavigatorClick}/>}
        </header>
    )
}