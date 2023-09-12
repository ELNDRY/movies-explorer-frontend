import React from 'react'
import { mainApi } from '../../utils/MainApi';
import "./MoviesCard.css";

export const MoviesCard = (props) => {
    const { movie, isSavedMovies, onClick } = props;
    let hours = Math.floor(movie.duration / 60 / 60);
    let minutes = Math.floor(movie.duration / 60) - (hours * 60);
    let duration = hours + 'ч ' + minutes + 'м'

    let type = 'unsaved'

    if (movie.isSaved) {
        type = 'saved'
    }

    //add servers url
    const movieImageUrl = typeof movie.image === 'string' ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`;
    const movieThumbnailUrl = movie.thumbnail ? movie.thumbnail : `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;

    let buttonClassName
    if (isSavedMovies) {
        buttonClassName = (`movies-card__button movies-card__button_delete`)
    } else {
        buttonClassName = (`movies-card__button movies-card__button_${type}`);
    }

    const handleClick = () => {
        onClick(movie);
    };

    return (
        <li className="movies-card">
            <div className="movies-card__description">
                <div className="movies-card__wrapper">
                    <h2 className="movies-card__name">{movie.nameRu}</h2>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                <button type="button" className={buttonClassName} onClick={handleClick} />
            </div>
            <a className="movies-card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={movieImageUrl} alt={movie.nameRu} />
            </a>
        </li>
    );
}