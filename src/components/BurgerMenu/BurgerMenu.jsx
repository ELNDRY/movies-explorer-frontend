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
                type="button"
                onClick={handleBurgerOpen}
                className="navigation__burger"
            ></button>
            {isBurgerOpen && <div className="navigation__overlay" onClick={handleBurgerClose} />}
            <div className={sideBarClassName}>
                <button
                    type="button"
                    className="burger__close-button"
                    onClick={handleBurgerClose}
                ></button>
                <div className="burger">
                    <ul className="burger__menu">
                        <li className="burger__menu-item">
                            <NavLink className={`burger__link${checkPathname('/') ? ' burger__link_underlined' : ''}`}
                                to="/">Главная</NavLink>
                        </li>
                        <li className="burger__menu-item">
                            <NavLink className={`burger__link${checkPathname('/movies') ? ' burger__link_underlined' : ''}`}
                                to="/movies">Фильмы</NavLink>
                        </li>
                        <li className="burger__menu-item">
                            <NavLink className={`burger__link${checkPathname('/saved-movies') ? ' burger__link_underlined' : ''}`}
                                to="/saved-movies">Сохраненные фильмы</NavLink>
                        </li>
                    </ul>
                    <AccountButton />
                </div>
            </div>
        </>
    );
}