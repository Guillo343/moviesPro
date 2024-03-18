import React, { useState, useEffect } from "react";

export const Fetch = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=62f8dc18&s=${searchQuery}`); 
      const jsonData = await response.json();
      setMovies(jsonData.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Movie Results </h2>
      {movies.length > 0 ? (
        
      <ul>
        {movies.map((movieItem) => (
          <li key={movieItem.imdbID}>{movieItem.Title}</li>
        ))}
      </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};
