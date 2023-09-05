import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer'
import '../Movies/Movies.css'
import { savedMovies } from "../../utils/constants";

export const SavedMovies = () => {
    console.log(savedMovies);
    return (
        <>
            <Navigation />
            <main className="content">
                <section className="movies">
                    <SearchForm />
                    <MoviesCardList movies={savedMovies} isSavedMovies={true} />
                </section>
            </main>
            <Footer />
        </>
    );
}
