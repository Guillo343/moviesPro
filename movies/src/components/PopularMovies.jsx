import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../public/PopularMovies.css'

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?apikey=62f8dc18&type=movie&y=2024&r=json"
          );
        if (response.data.Response === "True") {
          setPopularMovies(response.data.Search);
          setError("");
        } else {
          setPopularMovies([]);
          setError("No popular movies found");
        }
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Error fetching popular movies");
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() =>{
      setScrollIndex(prevIndex =>
        prevIndex === popularMovies.length -1 ? 0 : prevIndex + 1);
    },2000);

    return () => clearInterval(interval);
  }, [popularMovies]);

  const handlePrevClick = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === 0 ? popularMovies.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === popularMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="popular-movies-container">
      <h2>Popular Movies</h2>
      {error && <p>{error}</p>}
      <div className="movie-container">
        {popularMovies.map((movie, index) => (
          <div
            key={movie.imdbID}
            className="movie-poster"
            data-title={`${movie.Title} (${movie.Year})`}
          >
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default PopularMovies;
