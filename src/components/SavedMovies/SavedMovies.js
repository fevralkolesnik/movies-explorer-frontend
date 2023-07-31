import "./SavedMovies.css";
import React from 'react';
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies (props) {
    const {onNavigatorClick} = props;

    return (
        <main>
            <Header handleNavigatorClick={onNavigatorClick}/>
            <div className="saved-movies">
                <SearchForm />
                <MoviesCardList />
                <div className="saved-movies__block"></div>
            </div>
            <Footer />
        </main>
    )
}