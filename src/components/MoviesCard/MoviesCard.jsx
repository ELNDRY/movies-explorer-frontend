import React from 'react'
import "./MoviesCard.css";

export const MoviesCard = (props) => {
    const { movie, isSavedMovie, isSavedMovies, onClick } = props

    const {
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
    } = movie;

    const id = isSavedMovies ? movie.movieId : movie.id;

    let hours = Math.floor(movie.duration / 60);
    let minutes = Math.floor((movie.duration / 60 - hours) * 60);
    let movieDuration = hours + 'ч ' + minutes + 'м'
    let type = 'unsaved'
    //add servers url
    const movieImageUrl = typeof movie.image === 'string' ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`;
    const movieThumbnailUrl = movie?.thumbnail ? movie.thumbnail : `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;

    const payload = {
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: movieImageUrl,
        trailerLink: trailerLink,
        thumbnail: movieThumbnailUrl,
        movieId: id,
        nameRU: nameRU,
        nameEN: nameEN,
    };

    let buttonClassName
    if (isSavedMovies) {
        buttonClassName = (`movies-card__button movies-card__button_delete`)
    } else {
        if (isSavedMovie) {
            type = 'saved'
        }
        buttonClassName = (`movies-card__button movies-card__button_${type}`);
    }

    const handleClick = () => {
        onClick(payload);
    };

    return (
        <li className="movies-card">
            <div className="movies-card__description">
                <div className="movies-card__wrapper">
                    <h2 className="movies-card__name">{movie.nameRU}</h2>
                    <p className="movies-card__duration">{movieDuration}</p>
                </div>
                <button type="button" className={buttonClassName} onClick={handleClick} />
            </div>
            <a className="movies-card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={movieImageUrl} alt={movie?.nameRU} />
            </a>
        </li>
    );
}