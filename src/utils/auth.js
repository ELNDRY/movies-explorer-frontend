class Auth {
    constructor() {
        //this._url = process.env.NODE_ENV === 'production' ? 'https://api.elndry.movie-explorer.nomoreparties.co' : 'http//localhost:3000';
        this._url = 'https://api.elndry.movie-explorer.nomoreparties.co'
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ name, email, password })
        })
            .then(res => this._checkResponse(res));
    };

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
            .then(res => this._checkResponse(res))
    }

    logout() {
        return fetch(`${this._url}/signout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
            .then(res => this._checkResponse(res))
    }

    checkToken() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(res => this._checkResponse(res));
    }
}

export const auth = new Auth();