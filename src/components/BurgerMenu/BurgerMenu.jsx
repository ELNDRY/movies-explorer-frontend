import { NavLink } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';
import './BurgerMenu.css'

export const BurgerMenu = () => {
    return (
        <div className="burger">
            <ul className="burger__menu">
                <li className="burger__menu-item">
                    <NavLink className="burger__link" to="/">Главная</NavLink>
                </li>
                <li className="burger__menu-item">
                    <NavLink className="burger__link" to="/movies">Фильмы</NavLink>
                </li>
                <li className="burger__menu-item">
                    <NavLink className="burger__link" to="/saved-movies">Сохраненные фильмы</NavLink>
                </li>
                <AccountButton />
            </ul>
        </div>
    );
}