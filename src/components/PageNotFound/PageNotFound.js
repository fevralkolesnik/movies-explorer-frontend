import "./PageNotFound.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(-1, { replace: true })
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__link" type='button' onClick={handleNavigate}>
        Назад
      </button>
    </section>
  );
}
