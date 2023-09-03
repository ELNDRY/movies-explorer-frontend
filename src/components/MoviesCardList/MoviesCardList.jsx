import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"

export const MoviesCardList = (props) => {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {props.movies.map(movie => <MoviesCard movie={movie} isSavedMovies={props.isSavedMovies}/>)}
            </ul>
        </section>
    );
}