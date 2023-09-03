import { Link } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"

import "./Profile.css"

export const Profile = () => {
    return (
        <>
            <Navigation />
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">
                    <div className="profile__form-input">
                        <label className="profile__text">Имя</label>
                        <input className="profile__input"
                            id="name"
                            name="name"
                            type="text"
                            value="Виталий"
                            minLength="2" maxLength="40"
                            required
                        />
                    </div>
                    <div className="profile__form-input">
                        <label className="profile__text">Email</label>
                        <input className="profile__input"
                            id="email"
                            name="email"
                            type="email"
                            value="pochta@yandex.ru"
                            required
                        />
                    </div>
                </form>
                <div className="profile__wrapper">
                    <button type="submit" className="profile__edit-button">Редактировать</button>
                    <Link to="/" className="profile__exit-button">Выйти из аккаунта</Link>
                </div>
            </section>
        </>
    )
}