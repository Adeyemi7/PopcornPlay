
import  { useState, useEffect } from 'react';


const FavouriteMovies = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <>
    <div className=" mx-auto bold w-[80%] !text-white">
      <h1 className="text-2xl font-bold text-white text-center" >Favourite Movies</h1>
      <p >
        {favorites.map((favorite) => (
            <>
          <li className='list-none' key={favorites}>
            <img src={`https://image.tmdb.org/t/p/w500${favorite.poster_url}`} alt={favorite.title} className="w-64 h-80 rounded-lg mt-4" />
            <h2 >{favorite.title}</h2>
            <p>Release Date: {favorite.release_date}</p>
          </li>
      <span>
      <button
        className="py-2 block my-6 px-4 rounded mt-4bg-red-500 bg-blue-700 hover:bg-red-900 text-white font-bold"
        >
        Edit Genres
      </button>
      </span>
            </>
        ))}
      </p>
    </div>

    <div>
    <button
        className="py-2 block my-6 px-4 rounded mt-4bg-red-500 bg-blue-700 hover:bg-red-900 text-white font-bold"
        >
            Add new Genres
      </button>
    </div>
    </>
  );
};

export default FavouriteMovies;
