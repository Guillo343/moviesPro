import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../public/Searcher.css";

export const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=62f8dc18&s=${searchQuery}`
        );
        if (response.data.Response === "True") {
          setSuggestions(response.data.Search.map((movie) => movie.Title));
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

    // Fetch suggestions only if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchSuggestions();
    } else {
      setSuggestions([]);
      setError(""); // Clear error when searchQuery is empty
    }
  }, [searchQuery]);

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    setSelectedMovie(null);
  };

  const handleSuggestionClick = async (suggestion) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=62f8dc18&t=${suggestion}`
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
            {suggestion}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div className="selected-movie">
          <h2>{selectedMovie.Title}</h2>
          <p>Year: {selectedMovie.Year}</p>
          <p>Genre: {selectedMovie.Genre}</p>
          <p>Plot: {selectedMovie.Plot}</p>
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title + " poster"}
          />
        </div>
      )}
    </div>
  );
};
