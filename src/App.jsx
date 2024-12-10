

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import MovieInfo from "./Pages/MovieInfo";
import NotFound from "./Pages/NotFound";
import FavouritesMoviesPage from "./Pages/FavouritesMoviesPage";
import NewMoviePage from "./Pages/NewMoviePage";
import { useState,useEffect } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviePage />} />

        <Route path="/MovieInfo/:id" element={<MovieInfo />} />

        <Route path="/FavouritesMoviesPage" element={<FavouritesMoviesPage favorites={favorites} />} />

        <Route path="/NewMoviePage" element={<NewMoviePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
