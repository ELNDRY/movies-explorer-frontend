import React, { useState } from 'react';
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

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/", { replace: true })
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/", { replace: true })
    }

    const handleRegister = () => {
        navigate("/signin", { replace: true });
    }

    return (
        <div className="page">
            <Routes>
                <Route path='/signup' element={<Register onRegister={handleRegister} />} />
                <Route path='/signin' element={<Login onLogin={handleLogin} />} />
                <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
                <Route path='/movies' element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Movies />
                    </ProtectedRoute>} />
                <Route path='/saved-movies' element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <SavedMovies />
                    </ProtectedRoute>} />
                <Route path='/profile' element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Profile onLogout={handleLogout} />
                    </ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
