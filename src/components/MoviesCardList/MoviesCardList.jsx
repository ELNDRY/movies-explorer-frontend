import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = ({ movies, savedMovies, onAddMovie, onDeleteMovie, isSavedMovies, cardsCount }) => {
    
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