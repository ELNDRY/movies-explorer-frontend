import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import { Preloader } from "../Preloader/Preloader";
import '../Movies/Movies.css'

export const SavedMovies = ({ query, areShorts, onCheckboxClick, message, onSearch, onDeleteMovie, isLoading, movies }) => {
    const showAlert = query && (movies.length === 0);

    return (
        <>
            <Navigation />
            <main className="content content_sticky-footer">
                <section className="movies movies_saved-movies">
                    <SearchForm query={query}
                        areShorts={areShorts}
                        onCheckboxClick={onCheckboxClick}
                        onSearch={onSearch}
                        isLoading={isLoading}
                        isSavedMovies={true}
                    />
                    {isLoading ?
                        <Preloader />
                        :
                        (showAlert ?
                            <p className="movies__alert-message">{message || `Ничего не найдено.`}</p>
                            :
                            (<MoviesCardList movies={movies}
                                onDeleteMovie={onDeleteMovie}
                                isSavedMovies={true} />))}
                </section>
            </main>
            <Footer />
        </>
    );
}
