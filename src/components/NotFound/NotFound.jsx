import { Link } from "react-router-dom"
import "./NotFound.css"

export const NotFound = () => {
    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <Link className="not-found__link-back">Назад</Link>
        </section>
    )
}