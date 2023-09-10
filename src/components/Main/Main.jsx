import { NavLink } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';
import './Main.css';

// component of the "About Project" page
export const Main = ({ isLoggedIn }) => {
    return (
        <>
            {!isLoggedIn
                ? <Header isLoggedIn={isLoggedIn} isMainPage={true}>
                    <nav className="header__container header__container_main">
                        <NavLink className="header__link header__link_signup" to="/signup">
                            Регистрация
                        </NavLink>
                        <NavLink className="header__link header__link_signin" to="/signin">
                            Войти
                        </NavLink>
                    </nav>
                </Header >
                : <Navigation isMainPage={true} />
            }
            <main className="content content_sticky-footer">
                <div className="main">
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Portfolio />
                </div>
            </main>
            <Footer />
        </>
    );
}
