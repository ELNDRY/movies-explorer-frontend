import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from "../Header/Header"
import { Form } from '../Form/Form';

export const Register = ({ onRegister }) => {
    const [formValue, setFormValue] = useState({
        name: '',
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
        onRegister(formValue);
    }

    return (
        <section className="register">
            <Header />
            <Form title="Добро пожаловать!">
                <p className="form__label">Имя</p>
                <input id="name" className="form__input" name="name" type="text" placeholder="Email"
                    minLength="2" maxLength="40"
                    onChange={handleChange}
                    value={formValue.name} required />
                <span className="form__input-error name-error"></span>
                <p className="form__label">E-mail</p>
                <input className="form__input" name="email" type="email" placeholder="Email"
                    onChange={handleChange}
                    value={formValue.email} required />
                <span className="form__input-error email-error"></span>
                <p className="form__label">Пароль</p>
                <input className="form__input" name="password" type="password" placeholder="Пароль"
                    onChange={handleChange}
                    minLength="6"
                    maxLength="20"
                    value={formValue.password} required />
                <span className="form__input-error password-error"></span>
                <button className="form__submit-button" type="submit">Зарегистрироваться</button>
                <p className="form__text">Уже зарегистрированы?&nbsp;
                    <Link className="form__link" to="/signin">Войти</Link>
                </p>
            </Form>
        </section>
    )
}