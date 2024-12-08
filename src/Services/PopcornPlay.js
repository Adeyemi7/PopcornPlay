import axios from "axios";


// API Configuration
const API_BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "2409363cb7144dbc4b1de5e3ef5e6991"; // my API key
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA5MzYzY2I3MTQ0ZGJjNGIxZGU1ZTNlZjVlNjk5MSIsIm5iZiI6MTczMzQ0MTEyMC45NDQsInN1YiI6IjY3NTIzNjYwNDYyNDM5N2ZhODExNjc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcDUtZ83lI4TsHaXsO9WqgD5GNcLmWuDKV1bv4As13U"; // Replace with your token

// Create an axios instance for making API requests
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Search movies by query
export const searchMovies = async (query) => {
  try {
    const response = await api.get(
      `/search/movie?query=${encodeURIComponent(query)}&language=en-US`
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching movie search results:", error);
    return [];
  }
};

