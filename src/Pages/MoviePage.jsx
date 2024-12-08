import { searchMovies } from '../Services/PopcornPlay.js';
import LogoImage from "../Components/LogoImage";
import SearchBar from "../Components/SearchBar";
import MoviesList from "../Components/MoviesList";
import HeadingText from "../Components/HeadingText";
import { useState,useEffect } from "react";

const MoviePage = () => {
    const [query, setQuery] = useState(" ")
    const [movies, setMovies] = useState ([])

    const handleSearch = async () => {
        if (!query.trim()) {
          alert("Please enter a valid search term.");
          return;
        }
    
        const results = await searchMovies(query);
        setMovies(results);
      };
      
      useEffect(() => {
        if (!query) {
          setMovies([]);
          return;
        }
        const timer = setTimeout(async () => {
            if (query.trim()) {
              const results = await searchMovies(query);
              setMovies(results);
            }
          }, 300);
      
          return () => clearTimeout(timer);
        }, [query]);
    
  return (
    <div className=" !bg-gray-900 py-8">
      <LogoImage />
      <HeadingText />
      <SearchBar query={query} setQuery={setQuery} handleSearch = { handleSearch} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviePage;
