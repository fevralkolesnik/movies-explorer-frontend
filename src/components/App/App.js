import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
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
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  const navigate = useNavigate();

  function handleLoggedIn(name, email) {
    setCurrentUser({ ...currentUser, name: name, email: email });
    setIsLoggedIn(true);
  }

  function handleLoggedOut() {
    setCurrentUser({
      ...currentUser,
      _id: "",
      name: "",
      email: "",
    });
    setIsLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
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
        navigate("/signin", { replace: true });
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
