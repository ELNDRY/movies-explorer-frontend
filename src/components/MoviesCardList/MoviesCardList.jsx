import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { resolutionMobile, resolutionTablet, resolutionDesktop } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const MoviesCardList = (props) => {

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

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {props.movies.slice(0, cardsCount).map(movie => <MoviesCard movie={movie} isSavedMovies={props.isSavedMovies} />)}
            </ul>
        </section>
    );
}