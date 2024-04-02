import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../public/PopularMovies.css';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=2da2f67f1914be6e202b18730738c0b6"
        );
        setPopularMovies(response.data.results);
        setError("");
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Error fetching popular movies");
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) =>
        prevIndex === popularMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

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
            key={movie.id}
            className="movie-poster"
            data-title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
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
