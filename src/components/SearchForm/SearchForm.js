import './SearchForm.css';
import React from 'react';

export default function SearchForm (props) {
    return (
        <div className='search-form'>
            <form className='search-form__form' name='searchForm'>
                <label>
                    <input className='search-form__input' placeholder='Фильм'></input>
                </label>

                <button
                    className="search-form__submit-button"
                    type="submit"
                    aria-label="Отправить форму"
                ></button>
            </form>
            <label className='search-form__form-field'>
                <input type="checkbox" className="search-form__checkbox"></input>
                <span className="search-form__visible-checkbox"></span>
                Короткометражки
            </label>
        </div>
    )
}