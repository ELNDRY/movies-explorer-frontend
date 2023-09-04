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
            <main className="content">
                <Routes>
                    <Route path='/signup' element={<Register onRegister={handleRegister} />} />
                    <Route path='/signin' element={<Login onLogin={handleLogin} />} />
                    <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
                    <Route path="*" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Routes>
                                <Route path='/movies' element={<Movies />} />
                                <Route path='/saved-movies' element={<SavedMovies />} />
                                <Route path='/profile' element={<Profile onLogout={handleLogout} />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </ProtectedRoute>}>
                    </Route>
                </Routes>
            </main>
        </div>
    )
}
