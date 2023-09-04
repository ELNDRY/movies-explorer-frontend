import { NavLink } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';
import './BurgerMenu.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const BurgerMenu = () => {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const location = useLocation();

    let typeBurger = isBurgerOpen ? 'in' : 'out';
    const sideBarClassName = (`navigation__sidebar navigation__sidebar_${typeBurger}`);

    const handleBurgerOpen = () => {
        setIsBurgerOpen(true);
    };

    const handleBurgerClose = () => {
        setIsBurgerOpen(false);
    }

    const checkPathname = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <>
            <button
                onClick={handleBurgerOpen}
                className="navigation__burger"
            ></button>
            {isBurgerOpen && <div className="navigation__overlay" onClick={handleBurgerClose} />}
            <div className={sideBarClassName}>
                <button
                    className="burger__close-button"
                    onClick={handleBurgerClose}
                ></button>
                <div className="burger">
                    <ul className="burger__menu">
                        <li className="burger__menu-item">
                            <NavLink className="burger__link" to="/">Главная</NavLink>
                            {(checkPathname('/')) && <div className="burger__underline" />}
                        </li>
                        <li className="burger__menu-item">
                            <NavLink className="burger__link" to="/movies">Фильмы</NavLink>
                            {(checkPathname('/movies')) && <div className="burger__underline" />}
                        </li>
                        <li className="burger__menu-item">
                            <NavLink className="burger__link" to="/saved-movies">Сохраненные фильмы</NavLink>
                            {checkPathname('/saved-movies') && <div className="burger__underline" />}
                        </li>
                    </ul>
                    <AccountButton />
                </div>
            </div>
        </>
    );
}