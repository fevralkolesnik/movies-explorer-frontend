import { BASE_URL } from "./const";

class MainApi {
  #onResponce (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject('Ошибка: ', res);
  }

  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then (this.#onResponce);
  }

  setUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({name, email})
    })
    .then (this.#onResponce);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then (this.#onResponce);
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie) //тут как вообще, столько параметров..
    })
    .then (this.#onResponce);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then (this.#onResponce);
  }

  setToken(token) {
    this._headers = {
      ...this._headers,
      'authorization': `Bearer ${token}`
    }
  }
}

const token = localStorage.getItem("token");
const mainApi = new MainApi ({
  url: BASE_URL,
  headers: {
    "Content-type": "application/json",
    'authorization': `Bearer ${token}`
  }
});

export default mainApi