import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import { Preloader } from "../Preloader/Preloader";
import { validMovieSearch } from "../../utils/constants";
import "./Movies.css";

export const Movies = ({ query, areShorts, onCheckboxClick, message, onSearch,
    onAddMovie, onDeleteMovie, isLoading, movies, savedMovies, cardsCount, onLoadMore }) => {
    const isQueryValid = validMovieSearch.test(query?.query);
    const isAlertShown = (query && (movies.length === 0)) || !isQueryValid;
    const isLoadMoreShown = movies.length > cardsCount;

    console.log(query)

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
                        (isAlertShown ?
                            <p className="movies__alert-message">{isQueryValid ? (message || `Ничего не найдено.`)
                                : 'Нужно ввести ключевое слово'}</p>
                            :
                            (<MoviesCardList movies={movies}
                                savedMovies={savedMovies}
                                onAddMovie={onAddMovie}
                                onDeleteMovie={onDeleteMovie}
                                isSavedMovies={false}
                                cardsCount={cardsCount}
                            />))}
                    {isLoadMoreShown && isQueryValid && <button className="movies__more" type="button" onClick={onLoadMore}>
                        Ещё
                    </button>}
                </section>
            </main>
            <Footer />
        </>
    );
}
