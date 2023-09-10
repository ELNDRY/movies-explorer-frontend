import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import "./Movies.css";
import { movies } from "../../utils/constants";

export const Movies = () => {
    return (
        <>
            <Navigation />
            <main className="content content_sticky-footer">
                <section className="movies">
                    <SearchForm />
                    <MoviesCardList movies={movies} isSavedMovies={false} />
                    <button className="movies__more" type="button">
                        Ещё
                    </button>
                </section>
            </main>
            <Footer />
        </>
    );
}
