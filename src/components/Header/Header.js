import './Header.css';
import logo from '../../images/logo.svg';

export default function Header(props) {
    return(
    <header className='header'>
        <img className="header__logo" src={logo} alt="Лого" />
        <div className='header__container'>
            <p className='header__link'>Регистрация</p>
            <button className='header__button'>Войти</button>
        </div>
    </header>
    )
}