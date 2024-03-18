import React, { useState, useEffect } from "react";

export const Fetch = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=62f8dc18"); 
      const jsonData = await response.json();
      setMovie(jsonData.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
    </div>
  );
};
