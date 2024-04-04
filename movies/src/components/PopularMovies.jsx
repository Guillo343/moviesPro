import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../public/PopularMovies.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);
  const moviesPerPage = 6; 

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

  const handlePrevClick = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - moviesPerPage
    );
  };

  const handleNextClick = () => {
    setScrollIndex((prevIndex) =>
      Math.min(prevIndex + moviesPerPage, popularMovies.length - moviesPerPage)
    );
  };

  return (
    <div className="popular-movies-container">
      <h2>Popular Movies</h2>
      {error && <p>{error}</p>}
      <div className="movie-container">
        {popularMovies.slice(scrollIndex, scrollIndex + moviesPerPage).map((movie, index) => (
          <div
            key={movie.id}
            className="movie-poster"
            data-title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
            style={{ transition: "transform 0.5s" }} // Add transition to movie posters
          >
            <img
              style={{Width: '300px', height: '250px'}}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      {scrollIndex > 0 && (
        <button className="prev-button" onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
      )}
      {scrollIndex + moviesPerPage < popularMovies.length && (
        <button className="next-button" onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default PopularMovies;
