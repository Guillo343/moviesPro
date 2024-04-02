import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../public/Searcher.css";

export const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/authentication', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGEyZjY3ZjE5MTRiZTZlMjAyYjE4NzMwNzM4YzBiNiIsInN1YiI6IjY2MGMyYWJmOWM5N2JkMDE3Y2E1NGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eP7bgvj36E-u0MTu_ovTQAZgUktTCNAi5iaGfbxb2k4'
          }
        });
        console.log(response.data);
        // Once authenticated, fetch suggestions
        fetchSuggestions();
      } catch (error) {
        console.error("Authentication error:", error);
        setError("Authentication error");
      }
    };

    authenticate();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2da2f67f1914be6e202b18730738c0b6&query=${searchQuery}`
      );
      if (response.data.results.length > 0) {
        setSuggestions(response.data.results.map((movie) => movie.title));
        setError("");
      } else {
        setSuggestions([]);
        setError("No suggestions found");
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setError("Error fetching suggestions");
    }
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    setSelectedMovie(null);
  };

  const handleSuggestionClick = async (suggestion) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${suggestion.id}?api_key=2da2f67f1914be6e202b18730738c0b6`
      );
      setSelectedMovie(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError("Error fetching movie details");
    }
  };

  return (
    <div className="searcher-cont">
      <h1 className="searcher-h1">Search Movies</h1>
      <input
        className="searcher-inp"
        type="text"
        placeholder="Enter a movie title..."
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      {error && <h1>{error}</h1>}
      <ul className="searcher-suggestions">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.title}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div className="selected-movie">
          <h2>{selectedMovie.title}</h2>
          <p>Year: {selectedMovie.release_date}</p>
          <p>Genre: {selectedMovie.genre}</p>
          <p>Plot: {selectedMovie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title + " poster"}
          />
        </div>
      )}
    </div>
  );
};
