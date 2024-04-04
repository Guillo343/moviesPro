import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/UpcomingMovies.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [error, setError] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);
  const moviesPerPage = 6;

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=2da2f67f1914be6e202b18730738c0b6'
        );
        setUpcomingMovies(response.data.results);
        setError('');
      } catch (error) {
        console.error("Error fetching Upcoming movies:", error);
        setError('Error fetching Upcoming Movies');
      }
    };
    fetchUpcomingMovies(); 
  }, []);

  const handlePrevClick = () => {
    setScrollIndex((prevIndex) =>
      Math.max(prevIndex - moviesPerPage, 0)
    );
  };

  const handleNextClick = () => {
    setScrollIndex((prevIndex) =>
      Math.min(prevIndex + moviesPerPage, upcomingMovies.length - moviesPerPage)
    );
  };

  return (
    <div className="popular-movies-container">
      <h2>Upcoming Movies</h2>
      {error && <p>{error}</p>}
      <div className="movie-container">
        {upcomingMovies.slice(scrollIndex, scrollIndex + moviesPerPage).map((movie, index) => (
          <div
            key={movie.id}
            className="movie-poster"
            data-title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
            style={{ transition: "transform 0.5s" }}
          >
            <img
              style={{ width: '300px', height: '250px' }}
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
      {scrollIndex + moviesPerPage < upcomingMovies.length && (
        <button className="next-button" onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};
