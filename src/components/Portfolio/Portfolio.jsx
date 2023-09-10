import './Portfolio.css'

export const Portfolio = () => {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__links">
                <li className="portfolio__item">
                    <a rel="noreferrer" className="portfolio__link" href="https://elndry.github.io/how-to-learn/" target="_blank">
                        <p className="portfolio__subtitle">Статичный сайт</p>
                        <p className="portfolio__arrow">&#8599;</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a rel="noreferrer" className="portfolio__link" href="https://elndry.github.io/russian-travel/" target="_blank">
                        <p className="portfolio__subtitle">Адаптивный сайт</p>
                        <p className="portfolio__arrow">&#8599;</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a rel="noreferrer" className="portfolio__link" href="https://github.com/ELNDRY/react-mesto-api-full-gha" target="_blank">
                        <p className="portfolio__subtitle">Одностраничное приложение</p>
                        <p className="portfolio__arrow">&#8599;</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}