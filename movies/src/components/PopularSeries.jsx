import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/PopularMovies.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const PopularSeries = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  const [error, setError] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);
  const seriesPerPage = 6;

  useEffect(() => {
    const fetchPopularSeries = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/tv/popular?api_key=2da2f67f1914be6e202b18730738c0b6'
        );
        setPopularSeries(response.data.results);
        setError('');
      } catch (error) {
        console.error('Error fetching popular series:', error);
        setError('Error fetching popular series');
      }
    };
    fetchPopularSeries();
  }, []);

  const handlePrevClick = () => {
    setScrollIndex((prevIndex) =>
      Math.max(prevIndex - seriesPerPage, 0)
    );
  };

  const handleNextClick = () => {
    setScrollIndex((prevIndex) =>
      Math.min(prevIndex + seriesPerPage, popularSeries.length - seriesPerPage)
    );
  };

  return (
    <div className="popular-movies-container">
      <h2>Popular Series</h2>
      {error && <p>{error}</p>}
      <div className="movie-container">
        {popularSeries.slice(scrollIndex, scrollIndex + seriesPerPage).map((series, index) => (
          <div
            key={series.id}
            className="movie-poster"
            data-title={`${series.name} (${series.first_air_date.substring(0, 4)})`}
            style={{ transition: "transform 0.5s" }}
          >
            <img
              style={{ width: '300px', height: '250px' }}
              src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              alt={series.name}
            />
          </div>
        ))}
      </div>
      {scrollIndex > 0 && (
        <button className="prev-button" onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
      )}
      {scrollIndex + seriesPerPage < popularSeries.length && (
        <button className="next-button" onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};
