import "./NavTabAuth.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavTabAuth(props) {
  return (
    <div className="navtab-auth">
      <Link to="/signup" className="navtab-auth__link">
        Регистрация
      </Link>
      <Link
        to="/signin"
        className="navtab-auth__link navtab-auth__link_type_button"
      >
        Войти
      </Link>
    </div>
  );
}
