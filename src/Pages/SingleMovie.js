// SingleMovie.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Access_key = "2f42c9c46dc617e01d40dc3578e8c3b3";

const SingleMovie = () => {
  const { id } = useParams(); // Hook to get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Access_key}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <h4>{movieDetails.release_date}</h4>
      {/* Display other movie details here */}
    </div>
  );
};

export default SingleMovie;
