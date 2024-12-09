import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const apiKey = "2409363cb7144dbc4b1de5e3ef5e6991";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const handleNewRoute = () => {
    navigate( '/FavouritesMoviesPage');
  };

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const recommendationsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`
        );
        const recommendationsData = await recommendationsResponse.json();
        setRecommendedMovies(recommendationsData.results || []);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails();
  }, [id]);

  const handleAddToFavorite = () => {
    const favoriteMovie = {
      id: movie.id,
      title: movie.title,
      poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      release_date: movie.release_date,
    };
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(favoriteMovie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  };

  return (
    <div className="p-4 !text-white">
      <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 h-80 rounded-lg mt-4"
      />
      <p><strong>Release Year:</strong> {movie.release_date?.slice(0, 4)}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>

      <h2 className="mt-8 text-xl font-semibold text-white mb-6">Recommended Movies</h2>
      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-4">
        {recommendedMovies.slice(0,8).map((recMovie) => (
          <div key={recMovie.id} className="">
            <img
              src={`https://image.tmdb.org/t/p/w500${recMovie.poster_path}`}
              alt={recMovie.title}
              className="w-32 h-48 object-cover rounded-md mx-auto block"
            />
            <span>{recMovie.title} ({recMovie.release_date?.slice(0, 4)})</span>
          </div>
        ))}
      </div>

      <button
        onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite}
        className={`py-2 px-4 rounded mt-10 ${
          isFavorite ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <button
      onClick={handleNewRoute}
        className="py-2 block my-6 px-4 rounded mt-4bg-red-500 bg-blue-700 hover:bg-red-900 text-white font-bold"
        >
        See Favorites
      </button>
    </div>
  );
}

export default MovieDetails;
