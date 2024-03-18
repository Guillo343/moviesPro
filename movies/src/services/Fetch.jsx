import React, { useState, useEffect } from "react";

export const Fetch = ({ searchQuery }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=62f8dc18&s=${searchQuery}`); 
      const jsonData = await response.json();
      setMovie(jsonData.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Movie Results </h2>
      <ul>
        {movie.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};
