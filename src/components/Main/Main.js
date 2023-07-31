import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';

export default function Main(props) {
  const {isAuth, onNavigatorClick} = props;
    return (
        <main className="main">
          <Header main={true} isAuth={isAuth} handleNavigatorClick={onNavigatorClick}/>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Footer />
        </main>
      );
}