import { useState, useEffect } from "react";

const AddNewMovie = () => {
  const [addMovies, setAddMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const storedMovies = localStorage.getItem("favorites");
    if (storedMovies) {
      setAddMovies(JSON.parse(storedMovies));
    }
  }, []);

  const handleNewMovieGenres = () => {
    const newMovie = {
      title,
      release_date: releaseDate,
      poster_url: imageUrl, // Save the image URL
    };
    const updatedMovies = [...addMovies, newMovie];
    setAddMovies(updatedMovies);
    localStorage.setItem("favorites", JSON.stringify(updatedMovies));
    setTitle("");
    setReleaseDate("");
    setImageUrl("");
  };

  return (
    <div className="mt-8 w-[95%] mx-auto grid gap-6">
      <div className="grid gap-4">
        <div>
          <label htmlFor="title" className="text-xl">
            Movie Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-5 ml-4 outline-none box-border rounded-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="text-xl">
            Release Date:
          </label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="px-5 ml-4 outline-none box-border rounded-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="text-xl">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="e.g., https://example.com/movie-poster.jpg"
            className="px-5 ml-4 outline-none box-border rounded-sm text-black"
          />
        </div>
      </div>

      <button
        onClick={handleNewMovieGenres}
        className="py-2 px-4 rounded bg-blue-700 hover:bg-red-900 text-white font-bold"
      >
        Add New Movie
      </button>
    </div>
  );
};

export default AddNewMovie;
