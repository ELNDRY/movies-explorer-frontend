import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useForm } from 'react-hook-form'
import { registerErrors, validName, validEmail } from '../../utils/constants';

export const Register = ({ isLoading, onRegister, isLoggedIn, message }) => {

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
            <section className="register">
                <Form title="Добро пожаловать!" onSubmit={handleSubmit(onRegister)}>
                    <label className="form__label">Имя</label>
                    <input id="name" className="form__input" type="text" placeholder="Имя"
                        {...register("name", {
                            required: { value: true, message: registerErrors.name.required },
                            minLength: { value: 2, message: registerErrors.name.minLength },
                            maxLength: { value: 40, message: registerErrors.name.maxLength },
                            pattern: { value: validName, message: registerErrors.name.pattern },
                        })} />
                    <span className="form__input-error name-error">{errors?.name?.message || ''}</span>
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
                    <div className='form__submit-register'>
                        <span className="form__error">{message}</span>
                        <button className="form__submit-button form__submit-button_register" disabled={!isValid || isLoading} type="submit">Зарегистрироваться</button>
                    </div>
                    <p className="form__text">Уже зарегистрированы?&nbsp;
                        <Link className="form__link" to="/signin">Войти</Link>
                    </p>
                </Form>
            </section>
        </main>
    )
}