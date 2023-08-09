import "./SearchForm.css";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
  const { onSearchMovie } = props;

  const [inputValue, setInputValue] = useState(""); // возможно из-за этого
  const [checkbox, setCheckbox] = useState(false); // возможно из-за этого меняется хотя блять смысле
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem('input')) {
      setInputValue(localStorage.getItem('input'));
      setCheckbox(JSON.parse(localStorage.getItem('checkbox')));
      onSearchMovie(inputValue, checkbox);
    } 
    if (location.pathname === "/saved-movies") {
      setCheckbox(JSON.parse(localStorage.getItem('savedMoviesCheckbox')));
      onSearchMovie(inputValue, checkbox);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function handleChangeCheckbox() {
    if (location.pathname === "/saved-movies") {
      setCheckbox(!checkbox);
      onSearchMovie(inputValue, !checkbox);
    } else if (location.pathname === "/movies") {
      if (inputValue.length !== 0) {
        setCheckbox(!checkbox);
        onSearchMovie(inputValue, !checkbox);
      }
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    setErrorMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname === "/movies") {
      if (inputValue.length < 1) {
        setErrorMessage('Нужно ввести ключевое слово!');
      } else {
        onSearchMovie(inputValue, checkbox);
      }
    } else if (location.pathname === "/saved-movies") {
      onSearchMovie(inputValue, checkbox);
    }
  }

  return (
    <div className="search-form">
      <form
        className="search-form__form"
        name="searchForm"
        onSubmit={handleSubmit}
        noValidate
      >
        <label>
          <input
            className="search-form__input"
            type="text"
            name="movie"
            value={inputValue}
            onChange={handleChange}
            placeholder="Фильм"
            required
          />
          <span className="search-form__input-error">{errorMessage}</span>
        </label>

        <button
          className="search-form__submit-button"
          type="submit"
          aria-label="Отправить форму"
        ></button>
      </form>
      <label className="search-form__form-field">
        <input
          className="search-form__checkbox"
          type="checkbox"
          checked={checkbox ? true : false}
          onChange={handleChangeCheckbox}
        />
        <span className="search-form__visible-checkbox"></span>
        Короткометражки
      </label>
    </div>
  );
}
