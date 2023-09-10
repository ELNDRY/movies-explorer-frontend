import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        onRegister();
    }

    return (
        <main className="content">
            <section className="register">
                <Form title="Добро пожаловать!" onSubmit={handleSubmit}>
                    <label className="form__label">Имя</label>
                    <input id="name" className="form__input" name="name" type="text" placeholder="Имя"
                        minLength="2" maxLength="40"
                        onChange={handleChange}
                        value={formValue.name} required />
                    <span className="form__input-error name-error"></span>
                    <label className="form__label">E-mail</label>
                    <input className="form__input" name="email" type="email" placeholder="Email"
                        onChange={handleChange}
                        value={formValue.email} required />
                    <span className="form__input-error email-error"></span>
                    <label className="form__label">Пароль</label>
                    <input className="form__input" name="password" type="password" placeholder="Пароль"
                        onChange={handleChange}
                        minLength="6"
                        maxLength="20"
                        value={formValue.password} required />
                    <span className="form__input-error password-error">Что-то пошло не так...</span>
                    <button className="form__submit-button form__submit-button_register" type="submit">Зарегистрироваться</button>
                    <p className="form__text">Уже зарегистрированы?&nbsp;
                        <Link className="form__link" to="/signin">Войти</Link>
                    </p>
                </Form>
            </section>
        </main>
    )
}