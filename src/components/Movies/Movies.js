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
        <div className="movies">
            <Header handleNavigatorClick={onNavigatorClick}/>
            <main className="movies__main">
                <SearchForm />
                <MoviesCardList savedMovies={false}/>
                <MoreFilmButton />
            </main>
            <Footer />
        </div>
    )
}