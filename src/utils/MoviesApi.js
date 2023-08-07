import { BASE_MOVIES_URL } from "./const";

class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    })
    .then (this.#onResponce);
  }
}

const moviesApi = new MoviesApi({
  url: BASE_MOVIES_URL,
  headers: {
    "content-type": "application/json"
  }
});

export default moviesApi;