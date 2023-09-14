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
import { moviesApi } from '../../utils/MoviesApi';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState(null);
    const [querySaved, setQuerySaved] = useState(null);
    const [savedMovies, setSavedMovies] = useState([]);
    const [areShorts, setAreShorts] = useState(false);
    const [areShortsSaved, setAreShortsSaved] = useState(false);
    const navigate = useNavigate();

    const filterMovies = (movies, query, areShorts) => {
        let filteredMovies = [];

        if (query) {
            filteredMovies = movies.filter(movie => (!areShorts || ((movie.duration <= SHORT_MOVIE_DURATION) && (areShorts))) &&
                ((movie.nameRU.toLowerCase().includes(query.query.toLowerCase())) || (movie.nameEN.toLowerCase().includes(query.query.toLowerCase()))))
        } else {
            if (areShorts) {
                filteredMovies = movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
            } else {
                filteredMovies = movies;
            }
        }
        return filteredMovies;
    }

    useEffect(() => {
        Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
            .then(([user, savedMovies]) => {
                setIsLoggedIn(true);
                setCurrentUser(user);
                setSavedMovies(savedMovies);
            })
            .catch((err) => {
                setIsLoggedIn(false)
                console.log(err);
            })
    }, [isLoggedIn, navigate])

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
                setQuery(null);
                setAreShorts(null);
                setMovies([]);
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

    useEffect(() => {
        setQuerySaved(null);
        setAreShortsSaved(false);
    }, [navigate])

    useEffect(() => {
        setMovies(JSON.parse(localStorage.getItem('movies')) || []);
        setQuery(JSON.parse(localStorage.getItem('query')));
        setAreShorts(JSON.parse(localStorage.getItem('areShorts' || false)))
    }, [])

    const handleSearch = (query) => {
        if (movies.length === 0) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((movies) => {
                    localStorage.setItem('movies', JSON.stringify(movies));
                    setMovies(movies);
                    setMessage('');
                })
                .catch(() => setMessage('Во время запроса произошла ошибка.'))
                .finally(() => setIsLoading(false));
        }
        localStorage.setItem('query', JSON.stringify(query));
        setQuery(query);
    };

    const handleShortsSavedMovies = (areShortsSaved) => {
        setAreShortsSaved(areShortsSaved);
    };

    const handleAddMovie = (movie) => {
        mainApi.addMovie(movie)
            .then((movie) => {
                setMessage('')
                setSavedMovies(savedMovies => [...savedMovies, movie]);
            })
            .catch((err) => console.log(err))
    }

    const handleDeleteMovie = ({ movieId }) => {
        console.log(movieId);
        const movie = savedMovies.find(movie => movie.movieId === movieId);
        mainApi.deleteMovie(movie._id)
            .then(() => {
                setMessage('')
                setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
            })
            .catch((err) => console.log(err))
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
                            <Movies query={query}
                                areShorts={areShorts}
                                onCheckboxClick={setAreShorts}
                                message={message}
                                onSearch={handleSearch}
                                onAddMovie={handleAddMovie}
                                onDeleteMovie={handleDeleteMovie}
                                isLoading={isLoading}
                                movies={filterMovies(movies, query, areShorts)}
                                savedMovies={savedMovies} />
                        </ProtectedRoute>} />
                    <Route path='/saved-movies' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <SavedMovies query={querySaved}
                                areShorts={areShortsSaved}
                                onCheckboxClick={handleShortsSavedMovies}
                                message={message}
                                onSearch={setQuerySaved}
                                onDeleteMovie={handleDeleteMovie}
                                isLoading={isLoading}
                                movies={filterMovies(savedMovies, querySaved, areShortsSaved)} />
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