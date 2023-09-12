import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import "./Movies.css";

export const Movies = () => {
    return (
        <>
            <Navigation />
            <main className="content content_sticky-footer">
                <section className="movies">
                    <SearchForm />
                    <MoviesCardList />
                    <button className="movies__more" type="button">
                        Ещё
                    </button>
                </section>
            </main>
            <Footer />
        </>
    );
}
