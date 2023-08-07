import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import auth from "../../utils/Auth";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    email: "",
  });
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundedMovies, setFoundedMovies] = useState([]);
  const [foundedSavedMovies, setFoundedSavedMovies] = useState([]);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  const navigate = useNavigate();

  function handleLoggedIn(name, email) {
    setCurrentUser({ ...currentUser, name: name, email: email });
    setIsLoggedIn(true);
  }

  function handleLoggedOut() {
    localStorage.removeItem("token");
    setCurrentUser({
      ...currentUser,
      _id: "",
      name: "",
      email: "",
    });
    setIsLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    setFoundedMovies([]);
    setFoundedSavedMovies([]);
  }

  function handleTokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getUserInfo()
        .then((res) => {
          if (res) {
            handleLoggedIn(res.name, res.email);
            navigate("/movies", { replace: true }); // тут дальше возможно стоит получить все фильмы
          }
        })
        .catch((err) => {
          console.log(`Произошла ошибка: ${err}`);
        });
    }
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        mainApi.setToken(res.token);
        console.log("ok");
        mainApi.getUserInfo()
          .then((res) => {
            console.log("res");
            handleLoggedIn(res.name, res.email);
            navigate("/movies", { replace: true }); // тут дальше возможно стоит получить все фильмы
          })
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          _id: data._id,
          name: data.name,
          email: data.email,
        });
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
    moviesApi
      .getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
    mainApi
      .getSavedMovies()
      .then((data) => {
        data.reverse();
        setSavedMovies(data);
        setFoundedSavedMovies(data);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    handleTokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpdateUser(name, email) {
    mainApi
      .setUserInfo(name, email)
      .then((res) => {
        setCurrentUser({ ...currentUser, name: res.name, email: res.email });
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }

  function handleSearchMovie(input, checkbox) {
    const searchedMovies = movies.filter((item) =>
      item.nameRU.toLowerCase().includes(input.toLowerCase())
    );
    if (checkbox) {
      console.log('alo');
      const searchedMoviesChecked = searchedMovies.filter((item =>
        item.duration < 40
      ));
      setFoundedMovies(searchedMoviesChecked);
    }
    else {
      const searchedMoviesChecked = searchedMovies;
      setFoundedMovies(searchedMoviesChecked);
    }
  }

  function handleSearchSavedMovie (input, checkbox) {
    const searchedSavedMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(input.toLowerCase())
    );
    if (checkbox) {
      const searchedSavedMoviesChecked = searchedSavedMovies.filter((item =>
        item.duration < 40
      ));
      setFoundedSavedMovies(searchedSavedMoviesChecked);
    }
    else {
      const searchedSavedMoviesChecked = searchedSavedMovies;
      setFoundedSavedMovies(searchedSavedMoviesChecked);
    }
  }

  function handleSaveMovieClick (movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([res].concat(savedMovies));
        setFoundedSavedMovies([res].concat(foundedSavedMovies));
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }

  function handleDeleteSavedMovieClick (movieId) {
    mainApi
      .deleteMovie(movieId)
      .then((res) => {
        console.log(res);
        setSavedMovies(
          savedMovies.filter((item =>
            item._id !== res._id
          ))
        );
        setFoundedSavedMovies (
          foundedSavedMovies.filter((item =>
            item._id !== res._id
          ))
        );
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }

  function handleNavigatorOpen() {
    setIsNavigatorOpen(true);
  }

  function handleNavigatorClose() {
    setIsNavigatorOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <Main isLoggedIn={isLoggedIn} onNavigatorClick={handleNavigatorOpen} />
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                component={Movies}
                isLoggedIn={isLoggedIn}
                movies={foundedMovies}
                savedMovies={savedMovies}
                onSearchFormSubmit={handleSearchMovie}
                onSaveMovieClick={handleSaveMovieClick}
                onDeleteMovieClick={handleDeleteSavedMovieClick}
                onNavigatorClick={handleNavigatorOpen}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                movies={foundedSavedMovies}
                savedMovies={savedMovies}
                onSearchFormSubmit={handleSearchSavedMovie}
                onSaveMovieClick={handleSaveMovieClick}
                onDeleteMovieClick={handleDeleteSavedMovieClick}
                onNavigatorClick={handleNavigatorOpen}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                component={Profile}
                isLoggedIn={isLoggedIn}
                onUpdateUser={handleUpdateUser}
                onLogOut={handleLoggedOut}
                onNavigatorClick={handleNavigatorOpen}
              />
            }
          />

          <Route path="/signup" element={<Register onRegister={handleRegister} />} />

          <Route path="/signin" element={<Login onLogin={handleLogin} />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Navigation isOpen={isNavigatorOpen} onClose={handleNavigatorClose} />
      </CurrentUserContext.Provider>
    </div>
  );
}
