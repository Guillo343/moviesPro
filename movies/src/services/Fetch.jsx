import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/11?api_key=2da2f67f1914be6e202b18730738c0b6"
        );
        setMovie(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovie();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          {/* Display other movie information as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Fetch;
