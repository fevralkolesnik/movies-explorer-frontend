import { BASE_URL } from "./const";

class Auth {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Ошибка: ", res);
  }

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this.#onResponce);
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this.#onResponce);
  }
}

const auth = new Auth({
  url: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default auth;
