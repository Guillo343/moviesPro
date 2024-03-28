import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fetch } from "../services/Fetch";
import "../../public/Searcher.css";

export const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] =  useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=62f8dc18&s=${searchQuery}`
        );
        if (response.data.Response === "True") {
          setSuggestions(response.data.Search.map((movie) => movie.Title));
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        (<h1>Error</h1>), error;
      }
    };

    // Fetch suggestions only if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions when searchQuery is empty
    }
  }, [searchQuery]);
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    setSelectedMovie(null);
  };
  const handleSuggestionClick = async (suggestion) => {
    try{
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=62f8dc18&t=${suggestion}`
          );
          setSelectedMovie(response.data);
    }
    catch (error) { return (
      <h1>Error Fetching the data</h1>
    )

    }
  }

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
          <p>Year:{selectedMovie.Year}</p>
          <p>Genre: {selectedMovie.Genre}</p>
          <p>Plot: {selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt="poster.img" />
        </div>
      )}
    </div>
  );
};
