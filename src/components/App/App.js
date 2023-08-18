import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';

export const App = () => {
    return (
        <div className="page">
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </div>
    )
}