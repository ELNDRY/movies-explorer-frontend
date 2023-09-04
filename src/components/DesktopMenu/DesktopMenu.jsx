import { NavLink } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';
import './DesktopMenu.css'

export const DesktopMenu = ({ isMainPage }) => {
    let typeLink = isMainPage ? ' desktop-menu__link_main' : '';

    const linkClassName = (`desktop-menu__link${typeLink}`)


    return (
        <div className="destop-menu__container">
            <ul className="desktop-menu__links">
                <li className="desktop-menu__item">
                    <NavLink className={linkClassName} to="/movies">
                        Фильмы
                    </NavLink>
                </li>
                <li className="desktop-menu__item">
                    <NavLink className={linkClassName} to="/saved-movies">
                        Сохраненные фильмы
                    </NavLink>
                </li>
            </ul>
            <AccountButton isMainPage={isMainPage} />
        </div>
    );
};