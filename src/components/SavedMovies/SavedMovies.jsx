import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import '../Movies/Movies.css'

export const SavedMovies = () => {
    return (
        <>
            <Navigation />
            <main className="content content_sticky-footer">
                <section className="movies movies_saved-movies">
                    <SearchForm />
                    <MoviesCardList movies={[]} isSavedMovies={true} />
                </section>
            </main>
            <Footer />
        </>
    );
}
