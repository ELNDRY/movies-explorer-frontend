import React from 'react';
import '../Footer/Footer.css';

export const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__wrapper">
                <p className="footer__copyright">&copy; {year}</p>
                <ul className="footer__links">
                    <li>
                        <a rel='noreferrer' href='https://practicum.yandex.ru/' className="footer__link" target='_blank'>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a rel='noreferrer' href='https://github.com/ELNDRY' className="footer__link" target='_blank'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}