import "./SearchForm.css";
import {React, useState} from "react";

export default function SearchForm(props) {
  const { onSearchMovie } = props;

  const [inputValue, setInputValue] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleChangeCheckbox() {
    setCheckbox(!checkbox);
    // onSubmitCheckbox(!checkbox);
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
      <form className="search-form__form" name="searchForm" onSubmit={handleSubmit}>
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
