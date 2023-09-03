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


    return (
        <li className="movies-card">
            <div className="movies-card__description">
                <div className="movies-card-wrapper">
                    <p className="movies-card__name">{movie.name}</p>
                    <p className="card-movies__duration">{duration}</p>
                </div>
                <button className={buttonClassName} />
            </div>
            <img className="movies-card__image" src={movie.image} alt={movie.name} />
        </li>
    );
}