import './NavTab.css';
import React from 'react';
import {Link} from 'react-router-dom';
import icon from '../../images/icon.svg';

export default function NavTabAccaunt (props) {
    const {onClick} = props;
    return (
        <Link to="/profile" className='navtab__link navtab__link_type_profile' onClick={onClick}>
            <div className='navtab__container'>
                <p>Аккаунт</p>
                <div className='navtab__icon-container'>
                    <img className='navtab__icon' src={icon} alt="Иконка пользователя" />
                </div>
            </div>
        </Link>
    )
}