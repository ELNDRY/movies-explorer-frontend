import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { auth } from '../../utils/auth';

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([mainApi.getUserInfo()])
            .then(([user]) => {
                setIsLoggedIn(true);
                setCurrentUser(user);
            })
            .catch((err) => {
                setIsLoggedIn(false)
                console.log(err);
            })
    }, [])

    const handleLogin = ({ email, password }) => {
        auth.login(email, password)
            .then(() => {
                setIsLoggedIn(true);
                setMessage('Успешная авторизация.');
                setTimeout(() => {
                    setMessage('');
                }, 2000);
                navigate("/movies", { replace: true });
            })
            .catch((err) => {
                if (err.includes(401)) {
                    setMessage("Неверный логин или пароль.");
                } else {
                    setMessage("При авторизации произошла ошибка.");
                }
            })
    }

    const handleLogout = () => {
        auth.logout()
            .then(() => {
                setIsLoggedIn(false);
                setCurrentUser(null);
                navigate("/", { replace: true });
                localStorage.clear();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleRegister = ({ name, email, password }) => {
        auth.register(name, email, password)
            .then(() => {
                setIsLoggedIn(true);
                setMessage('Успешная регистрация.');
                setTimeout(() => {
                    setMessage('');
                }, 2000);
                navigate("/movies", { replace: true });
            })
            .catch((err) => {
                if (err.includes(409)) {
                    setMessage('Пользователь с данным emeil уже существует.')
                } else {
                    setMessage('При регистрации произошла ошибка.')
                }
            })
    }

    const handleUpdateUser = ({ name, email }) => {
        mainApi.editUserInfo({ name, email })
            .then((userInfo) => {
                setCurrentUser(userInfo);
                setMessage('Профиль успешно редактирован.');
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
                setMessage('При редактировании профиля произошла ошибка.');
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Routes>
                    <Route path='/signup' element={<Register onRegister={handleRegister} isLoggedIn={isLoggedIn} message={message} />} />
                    <Route path='/signin' element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} message={message} />} />
                    <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
                    <Route path='/movies' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Movies />
                        </ProtectedRoute>} />
                    <Route path='/saved-movies' element={
                        <ProtectedRoute>
                            <SavedMovies />
                        </ProtectedRoute>} />
                    <Route path='/profile' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Profile onLogout={handleLogout} onEdit={handleUpdateUser} message={message} />
                        </ProtectedRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}