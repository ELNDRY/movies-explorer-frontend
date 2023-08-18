import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

// component with the layout of the banner of the "About the project" page.
export const Promo = () => {
    return (
        <section className="promo">
            <img className="promo__logo" src={landingLogo} alt='Логотип лэндинга' />

            <div className="promo__wrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href="#about-project" className="promo__about-link">Узнать больше</a>
            </div>
        </section>
    );
}