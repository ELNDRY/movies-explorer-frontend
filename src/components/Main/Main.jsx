import { NavLink } from 'react-router-dom';
import {Header} from '../Header/Header';
import {Promo} from '../Promo/Promo';
import {AboutProject} from '../AboutProject/AboutProject';
import {Techs} from '../Techs/Techs';
import {AboutMe} from '../AboutMe/AboutMe';
import {Portfolio} from '../Portfolio/Portfolio';
import {Footer} from '../Footer/Footer';
import './Main.css';

// component of the "About Project" page
export const Main = () => {
    return (
        <>
            <Header>
                <div className="header__links">
                    <NavLink className="header__link header__link_signup" to="/signup">
                        Регистрация
                    </NavLink>
                    <NavLink className="header__link header__link_signin" to="/signin">
                        Войти
                    </NavLink>
                </div>
            </Header>
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer/>
        </>
    );
}
