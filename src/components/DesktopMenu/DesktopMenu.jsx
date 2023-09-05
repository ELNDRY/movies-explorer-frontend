import { NavLink, useLocation } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';
import './DesktopMenu.css'

export const DesktopMenu = ({ isMainPage }) => {
    let typeLink = isMainPage ? ' desktop-menu__link_main' : '';

    const linkClassName = (`desktop-menu__link${typeLink}`)
    const linkActiveClassName = (`desktop-menu__link desktop-menu__link_active${typeLink}`)


    const location = useLocation();

    const checkPathname = (pathname) => {
        return location.pathname === pathname;
      };

    return (
        <div className="desktop-menu">
            <ul className="desktop-menu__links">
                <li className="desktop-menu__item">
                    <NavLink className={checkPathname('/saved-movies') ? linkClassName : linkActiveClassName} to="/movies">
                        Фильмы
                    </NavLink>
                </li>
                <li className="desktop-menu__item">
                    <NavLink className={checkPathname('/movies') ? linkClassName : linkActiveClassName} to="/saved-movies">
                        Сохраненные фильмы
                    </NavLink>
                </li>
            </ul>
            <AccountButton isMainPage={isMainPage} />
        </div>
    );
};