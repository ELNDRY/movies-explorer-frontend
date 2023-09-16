import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useForm } from 'react-hook-form';
import { registerErrors, validEmail } from '../../utils/constants';

export const Login = ({ onLogin, isLoggedIn, message }) => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    if (isLoggedIn) {
        return (
            <Navigate to='/' />
        )
    }

    return (
        <main className="content">
            <section className="login">
                <Form title="Рады видеть!" onSubmit={handleSubmit(onLogin)}>
                    <label className="form__label">E-mail</label>
                    <input className="form__input" type="email" placeholder="Email"
                        {...register("email", {
                            required: { value: true, message: registerErrors.email.required },
                            pattern: { value: validEmail, message: registerErrors.email.pattern },
                        })} />
                    <span className="form__input-error email-error">{errors?.email?.message || ''}</span>
                    <label className="form__label">Пароль</label>
                    <input className="form__input" type="password" placeholder="Пароль"
                        {...register("password", {
                            required: { value: true, message: registerErrors.password.required },
                            minLength: { value: 6, message: registerErrors.password.minLength },
                            maxLength: { value: 20, message: registerErrors.password.maxLength },
                        })} />
                    <span className="form__input-error password-error">{errors?.password?.message || ''}</span>
                    <div className='form__submit-login'>
                        <span className="form__error">{message}</span>
                        <button className="form__submit-button form__submit-button_login" disabled={!isValid} type="submit">Войти</button>
                    </div>
                    <p className="form__text">Еще не зарегистрированы?&nbsp;
                        <Link className="form__link" to="/signup">Регистрация</Link>
                    </p>
                </Form>
            </section>
        </main>
    )
}