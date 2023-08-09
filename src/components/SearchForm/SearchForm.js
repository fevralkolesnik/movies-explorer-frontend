import "./SearchForm.css";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
  const { onSearchMovie } = props;

  const [inputValue, setInputValue] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem('input')) {
      setInputValue(localStorage.getItem('input'));
      setCheckbox(localStorage.getItem('checkbox'));
      onSearchMovie(inputValue, checkbox);
    } 
    if (location.pathname === "/saved-movies") {
      setCheckbox(localStorage.getItem('savedMoviesCheckbox'));
      onSearchMovie(inputValue, checkbox);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function handleChangeCheckbox() {
    setCheckbox(!checkbox);
    if (inputValue !== "" || location.pathname === "/saved-movies") {
      onSearchMovie(inputValue, !checkbox);
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSearchMovie(inputValue, checkbox);
  }

  return (
    <div className="search-form">
      <form
        className="search-form__form"
        name="searchForm"
        onSubmit={handleSubmit}
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
