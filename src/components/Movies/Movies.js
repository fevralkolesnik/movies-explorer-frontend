import "./Movies.css";
import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmButton from "../MoviesCardList/MoreFilmButton/MoreFilmButton";
import Footer from "../Footer/Footer";

export default function Movies (props) {
    const {onNavigatorClick} = props;
    
    return (
        <main>
            <Header handleNavigatorClick={onNavigatorClick}/>
            <div className="movies">
                <SearchForm />
                <MoviesCardList />
                <MoreFilmButton />
            </div>
            <Footer />
        </main>
    )
}