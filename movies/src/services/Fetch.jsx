import React, { useState, useEffect } from "react";

export const Fetch = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/movies"); 
      const jsonData = await response.json();
      setMovie(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movie ? (
        <ul>
          {movie.map((movieItem, index) => (
            <li key={index}>{movieItem.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
