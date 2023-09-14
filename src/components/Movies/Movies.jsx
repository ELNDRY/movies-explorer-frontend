import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import { Preloader } from "../Preloader/Preloader";
import "./Movies.css";

export const Movies = ({ query, areShorts, onCheckboxClick, message, onSearch, onAddMovie, onDeleteMovie, isLoading, movies, savedMovies }) => {
    const showAlert = query && (movies.length === 0);

    return (
        <>
            <Navigation />
            <main className="content content_sticky-footer">
                <section className="movies">
                    <SearchForm query={query}
                        areShorts={areShorts}
                        onCheckboxClick={onCheckboxClick}
                        onSearch={onSearch}
                        isLoading={isLoading}
                        isSavedMovies={false}
                    />
                    {isLoading ?
                        <Preloader />
                        :
                        (showAlert ?
                            <p className="movies__alert-message">{message || `Ничего не найдено.`}</p>
                            :
                            (<MoviesCardList movies={movies}
                                savedMovies={savedMovies}
                                onAddMovie={onAddMovie}
                                onDeleteMovie={onDeleteMovie}
                                isSavedMovies={false} />))}
                    <button className="movies__more" type="button">
                        Ещё
                    </button>
                </section>
            </main>
            <Footer />
        </>
    );
}
