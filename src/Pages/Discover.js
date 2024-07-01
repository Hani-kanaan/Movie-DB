import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/Discover.css';

const Access_key = "2f42c9c46dc617e01d40dc3578e8c3b3";

const Discover = () => {
  const [selectedGenre, setSelectedGenre] = useState('movie'); // Default genre is 'movie'
  const [media, setMedia] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  

  // Function to fetch media based on the selected genre
  const fetchMedia = async (genre) => {
    try {                  
      setLoading(true);        
      const response = await fetch(`https://api.themoviedb.org/3/discover/${genre}?api_key=${Access_key}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMedia(data.results);
    } catch (error) {
      console.error('Fetch error:', error);
    }finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchMedia(selectedGenre);
  }, [selectedGenre]);

  const handleItemClick = (id) => {
    navigate(`/movie/${id}`); 
    //bug with ID for series fix later
  }
  return (
    <div className="discover-container">
      <div className="genre-buttons">
        <button className={selectedGenre === 'movie' ? 'active' : ''} onClick={() => setSelectedGenre('movie')}>Movies</button>
        <button className={selectedGenre === 'tv' ? 'active' : ''} onClick={() => setSelectedGenre('tv')}>TV Series</button>
      </div>

      {loading ? (
        <div className="loading">Loading...</div> // Display loading animation
      ) : (
        <div className="media-list">
          {media.map((item) => (
            <div key={item.id} className="media-item" onClick={() => handleItemClick(item.id)}>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
              <h3>{item.title || item.name}</h3>
              <p>{item.overview}</p>
              <h4>{item.release_date}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Discover;
