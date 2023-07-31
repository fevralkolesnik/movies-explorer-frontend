import './PageNotFound.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <section className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <Link to={navigate(-1)} className='not-found__link'>Назад</Link>
        </section>
    );
}