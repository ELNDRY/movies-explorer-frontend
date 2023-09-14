import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { resolutionMobile, resolutionTablet, resolutionDesktop } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const MoviesCardList = ({ movies, savedMovies, onAddMovie, onDeleteMovie, isSavedMovies }) => {

    const windowSize = useWindowSize()
    const [cardsCount, setCardsCount] = useState(resolutionDesktop.cardsCount)

    useEffect(() => {
        if (windowSize.width > resolutionTablet.width) {
            setCardsCount(resolutionDesktop.cardsCount);
        } else if (windowSize.width > resolutionMobile.width) {
            setCardsCount(resolutionTablet.cardsCount);
        } else {
            setCardsCount(resolutionMobile.cardsCount);
        }
    }, [windowSize]);

    const renderMovie = (movie) => {
        const isSavedMovie = isSavedMovies ? true : (savedMovies.some(m => movie.id === m.movieId) ? true : false);
        const onClick = isSavedMovie ? onDeleteMovie : onAddMovie;

        return (
            <MoviesCard key={movie.movieId} movie={movie} isSavedMovies={isSavedMovies} isSavedMovie={isSavedMovie} onClick={onClick} />
        )
    }

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {(isSavedMovies ? movies : movies.slice(0, cardsCount)).map(movie => renderMovie(movie))}
            </ul>
        </section>
    );
}