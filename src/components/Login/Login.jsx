import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from "../Header/Header"
import { Form } from '../Form/Form';

export const Login = ({ onLogin }) => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin(formValue);
    }

    return (
        <section className="login">
            <Form title = "Рады видеть!">
                <p className="form__label">E-mail</p>
                <input className="form__input" name="email" type="email" placeholder="Email"
                    onChange={handleChange}
                    value={formValue.email} required />
                <span className="form__input-error email-error"></span>
                <p className="form__label">Пароль</p>
                <input className="form__input" name="password" type="password" placeholder="Пароль"
                    onChange={handleChange}
                    value={formValue.password} required />
                <span className="form__input-error password-error">Что-то пошло не так...</span>
                <button className="form__submit-button" type="submit">Войти</button>
                <p className="form__text">Еще не зарегистрированы?&nbsp;
                    <Link className="form__link" to="/signup">Регистрация</Link>
                </p>
            </Form>
        </section >
    )
}