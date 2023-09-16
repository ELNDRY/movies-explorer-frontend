import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"
import { useState } from "react";
import "./Profile.css"
import { useForm } from "react-hook-form";
import { registerErrors, validName, validEmail } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const Profile = ({ isLoading, onLogout, onEdit, message }) => {
    const currentUser = useContext(CurrentUserContext);
    const [isEditing, setIsEditing] = useState(false);

    const {
        register,
        formState: { errors, isValid, isDirty, isSubmitSuccessful },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: currentUser?.name,
            email: currentUser?.email
        }
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({}, { keepValues: true });
        }
    }, [isSubmitSuccessful, reset]);

    useEffect(() => {
        reset(currentUser);
    }, [currentUser]);


    const handleLogout = (evt) => {
        evt.preventDefault();
        onLogout();
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmitClick = () => {
        setTimeout(() => {
            setIsEditing(false);
        }, 2000);
    }

    const onSubmit = ({ name, email }) => {
        onEdit({ name, email });
    };

    return (
        <>
            <Navigation />
            <main className="content">
                <section className="profile">
                    <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
                    <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="profile__form-input">
                            <label className="profile__text">Имя</label>
                            <input className="profile__input"
                                placeholder="Укажите имя"
                                type="text"
                                disabled={!isEditing}
                                {...register("name", {
                                    required: { value: true, message: registerErrors.name.required },
                                    minLength: { value: 2, message: registerErrors.name.minLength },
                                    maxLength: { value: 40, message: registerErrors.name.maxLength },
                                    pattern: { value: validName, message: registerErrors.name.pattern },
                                })}
                            />
                        </div>
                        <span className="profile__input-error name-error">{errors?.name?.message || ''}</span>
                        <div className="profile__form-input">
                            <label className="profile__text">Email</label>
                            <input className="profile__input"
                                placeholder="Укажите email"
                                id="email"
                                type="email"
                                disabled={!isEditing || isLoading}
                                {...register("email", {
                                    required: { value: true, message: registerErrors.email.required },
                                    pattern: { value: validEmail, message: registerErrors.email.pattern },
                                })}
                            />
                        </div>
                        <span className="profile__input-error name-error">{errors?.email?.message || ''}</span>
                        {!isEditing ? (
                            <div className="profile__wrapper">
                                <button type="button" className="profile__edit-button" onClick={handleEditClick}>Редактировать</button>
                                <Link to="/" className="profile__exit-button" onClick={handleLogout}>Выйти из аккаунта</Link>
                            </div>)
                            : (
                                <div className="profile__submit-edit">
                                    <span className="profile__submit-error">{message}</span>
                                    <button className="profile__submit-button" type="submit" onClick={handleSubmitClick} disabled={!isValid || !isDirty}>Сохранить</button>
                                </div>
                            )
                        }
                    </form>
                </section>
            </main>
        </>
    )
}