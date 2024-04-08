import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/Searcher.css';

export const Searcher = ({ onMovieSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=2da2f67f1914be6e202b18730738c0b6&query=${searchQuery}`
        );
        if (response.data.results.length > 0) {
          setSuggestions(response.data.results);
          setError('');
        } else {
          setSuggestions([]);
          setError('No suggestions found');
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setError('Error fetching suggestions');
      }
    };

    if (searchQuery.trim() !== '') {
      fetchSuggestions();
    }
  }, [searchQuery]);

  const handleSuggestionClick = (movie) => {
    onMovieSelect(movie); // Notify the parent component about the selected movie
  };

  return (
    <div className="searcher-cont">
      <h1 className="searcher-h1">Search Movies</h1>
      <input
        className="searcher-inp"
        type="text"
        placeholder="Enter a movie title..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {error && <h1>{error}</h1>}
      <ul className="searcher-suggestions">
        {suggestions.map((movie, index) => (
          <li key={index} onClick={() => handleSuggestionClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
