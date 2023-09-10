import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Header.css';

export const Header = (props) => {

    let typeHeader = props.isMainPage ? ' header_main' : '';

    const headerClassName = (`header${typeHeader}`)

    return (
        <header className={headerClassName}>
            <Link to='/' className="header__logo-link">
                <img className='header__logo' src={logo} alt='Логотип Movies Explorer' />
            </Link>
            {props.children}
        </header>
    );
}