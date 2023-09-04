import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        onLogin();
    }

    return (
        <section className="login">
            <Form title="Рады видеть!" onSubmit={handleSubmit}>
                <p className="form__label">E-mail</p>
                <input className="form__input" name="email" type="email" placeholder="Email"
                    onChange={handleChange}
                    value={formValue.email} required />
                <span className="form__input-error email-error"></span>
                <p className="form__label">Пароль</p>
                <input className="form__input" name="password" type="password" placeholder="Пароль"
                    onChange={handleChange}
                    value={formValue.password} required />
                <span className="form__input-error password-error"></span>
                <button className="form__submit-button form__submit-button_login" type="submit">Войти</button>
                <p className="form__text">Еще не зарегистрированы?&nbsp;
                    <Link className="form__link" to="/signup">Регистрация</Link>
                </p>
            </Form>
        </section >
    )
}