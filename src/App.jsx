

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import MovieInfo from "./Pages/MovieInfo";
import NotFound from "./Pages/NotFound";
import FavouritesMoviesPage from "./Pages/FavouritesMoviesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviePage />} />

        <Route path="/MovieInfo/:id" element={<MovieInfo />} />

        <Route path="/FavouritesMoviesPage" element={<FavouritesMoviesPage />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
