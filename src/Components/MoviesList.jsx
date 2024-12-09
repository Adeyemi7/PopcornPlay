/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router";

const MovieList = ({movies}) => {
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);


  const getPosterUrl = (posterPath) => {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : "";
  };

  const navigate = useNavigate();

  const handleNewRoute = (id) => {
    navigate(`/MovieInfo/${id}`);
  };

  
  return (
    <>
      {movies.length === 0 && <p className="  text-center text-xl text-white mt-16">No results found.</p>}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto ">
      {movies.map((movie, id) => (
        <div
          key={movie.id}
        style={{
            transform: isHoveredIndex === id ? 'scale(1.1)' : 'scale(1)',
            transition: isHoveredIndex === id ? 'none' : 'transform 0.3s ease',
          }}
          onClick={() => handleNewRoute(movie.id)}
      onMouseEnter={() => setIsHoveredIndex(id)}
      onMouseLeave={() => setIsHoveredIndex(null)}
          className="flex flex-col items-center bg- rounded-lg shadow-xxl p-4 hover:"
        >
          <img
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            className="w-40 h-48 object-cover rounded-md border-[3px] border-[rgba(20,21, 31,100)]"
          />

          <h3 className="mt-4 text-center text-lg font-semibold text-[rgba(20,21, 31,100)] !text-white">
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default MovieList;
