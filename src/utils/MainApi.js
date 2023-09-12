class MainApi {
    constructor({ headers }) {
        // this._url = this._url = process.env.NODE_ENV === 'production' ? 'api.elndry.movie-explorer.nomoreparties.co' : 'http//localhost:3000';
        this._url = 'https://api.elndry.movie-explorer.nomoreparties.co';
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
        })
            .then(res => this._checkResponse(res));
    }


    editUserInfo(userInfo) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userInfo),
        })
            .then(res => this._checkResponse(res));
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
            .then(res => {
                return this._checkResponse(res);
            })
    }

    addMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movie),
        })
            .then(res => this._checkResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
            .then(res => this._checkResponse(res));
    }
}

export const mainApi = new MainApi({
    headers: {
        "Content-Type": "application/json",
    }
});