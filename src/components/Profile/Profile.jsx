import React from "react";
import { Link } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"
import { useState } from "react";
import "./Profile.css"

export const Profile = ({ onLogout }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleLogout = (evt) => {
        evt.preventDefault();
        onLogout();
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (evt) => {
        evt.preventDefault();
        setIsEditing(false)
    };


    return (
        <>
            <Navigation />
            <main className="content">
                <section className="profile">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <form className="profile__form">
                        <div className="profile__form-input">
                            <label className="profile__text">Имя</label>
                            <input className="profile__input"
                                placeholder="Укажите имя"
                                id="name"
                                name="name"
                                type="text"
                                value="Виталий"
                                minLength="2" maxLength="40"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                        <div className="profile__form-input">
                            <label className="profile__text">Email</label>
                            <input className="profile__input"
                                placeholder="Укажите email"
                                id="email"
                                name="email"
                                type="email"
                                value="pochta@yandex.ru"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                    </form>
                    {!isEditing ? (
                        <div className="profile__wrapper">
                            <button type="submit" className="profile__edit-button" onClick={handleEditClick}>Редактировать</button>
                            <Link to="/" className="profile__exit-button" onClick={handleLogout}>Выйти из аккаунта</Link>
                        </div>)
                        : (
                            <div className="profile__submit-edit">
                                <span className="profile__submit-error">При обновлении профиля произошла ошибка.</span>
                                <button className="profile__submit-button" type="submit" onClick={handleSaveClick}>Сохранить</button>
                            </div>
                        )
                    }
                </section>
            </main>
        </>
    )
}