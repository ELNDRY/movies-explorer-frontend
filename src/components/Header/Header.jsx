import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Header.css';

export const Header = (props) => {
    return (
        <header className="header">
            <Link to='/'>
                <img className='header__logo' src={logo} alt='Логотип Movies Explorer' />
            </Link>
            {props.children}
        </header>
    );
}