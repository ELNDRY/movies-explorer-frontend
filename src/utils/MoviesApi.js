class MoviesApi
 {
    constructor() {
        this._url = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }
}

export const moviesApi = new MoviesApi();