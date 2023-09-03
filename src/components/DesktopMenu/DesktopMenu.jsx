import { NavLink } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';
import './DesktopMenu.css'

export const DesktopMenu = () => {
    return (
        <div className="destop-menu__container">
            <ul className="desktop-menu__links">
                <li className="desktop-menu__item">
                    <NavLink className="desktop-menu__link desktop-menu__link_active" to="/movies">
                        Фильмы
                    </NavLink>
                </li>
                <li className="desktop-menu__item">
                    <NavLink className="desktop-menu__link" to="/saved-movies">
                        Сохраненные фильмы
                    </NavLink>
                </li>
            </ul>
            <AccountButton />
        </div>
    );
};