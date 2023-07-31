import "./App.css";
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";

export default function App() {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  function handleNavigatorOpen() {
    setIsNavigatorOpen(true);
  }

  function handleNavigatorClose() {
    setIsNavigatorOpen(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main isAuth={false} onNavigatorClick={handleNavigatorOpen} />
          }
        />

        <Route
          path="/movies"
          element={<Movies onNavigatorClick={handleNavigatorOpen} />}
        />

        <Route
          path="/saved-movies"
          element={<SavedMovies onNavigatorClick={handleNavigatorOpen} />}
        />

        <Route
          path="/profile"
          element={<Profile onNavigatorClick={handleNavigatorOpen} />}
        />

        <Route path="/signup" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Navigation isOpen={isNavigatorOpen} onClose={handleNavigatorClose} />
    </div>
  );
}
