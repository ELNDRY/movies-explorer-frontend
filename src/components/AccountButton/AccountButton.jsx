import { NavLink } from "react-router-dom";
import './AccountButton.css'

export const AccountButton = () => {
    return (
        <NavLink
            className="account-link"
            to="/profile"
        >Аккаунт</NavLink>
    )
}