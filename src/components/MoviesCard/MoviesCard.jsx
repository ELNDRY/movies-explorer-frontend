import React from 'react'
import "./MoviesCard.css";

export const MoviesCard = (props) => {
    const { movie, isSavedMovies } = props;
    let hours = Math.floor(movie.duration / 60 / 60);
    let minutes = Math.floor(movie.duration / 60) - (hours * 60);
    let duration = hours + 'ч ' + minutes + 'м'

    let type = 'unsaved'

    if (movie.isSaved) {
        type = 'saved'
    }

    let buttonClassName
    if (isSavedMovies) {
        buttonClassName = (`movies-card__button movies-card__button_delete`)
    } else {
        buttonClassName = (`movies-card__button movies-card__button_${type}`);
    }

    // TODO movies-card__link href will lead to movie's trailer
    return (
        <li className="movies-card">
            <div className="movies-card__description">
                <div className="movies-card__wrapper">
                    <h2 className="movies-card__name">{movie.name}</h2>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                <button type="button" className={buttonClassName} />
            </div>
            <a className="movies-card__link" href="#" target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={movie.image} alt={movie.name} />
            </a>
        </li>
    );
}