import "./Main.css";
import React from "react";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

export default function Main(props) {
  const { isLoggedIn, onNavigatorClick } = props;
  return (
    <div className="main">
      <Header
        main={true}
        isLoggedIn={isLoggedIn}
        handleNavigatorClick={onNavigatorClick}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
