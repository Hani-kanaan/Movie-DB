import React, { useState, useEffect } from 'react';
const Access_key = "2f42c9c46dc617e01d40dc3578e8c3b3"

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState('movie'); // Default genre is 'movie'
  const [media, setMedia] = useState([]);

  // Function to fetch media based on the selected genre
  const fetchMedia = async (genre) => {
    try {                          
      const response = await fetch(`https://api.themoviedb.org/3/discover/${genre}?api_key=${Access_key}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMedia(data.results);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // Use useEffect to fetch media when the component mounts or when the selected genre changes
  useEffect(() => {
    fetchMedia(selectedGenre);
  }, [selectedGenre]);

  return (
    <div>
      {/* Buttons to select different genres */}
      <div>
        <button onClick={() => setSelectedGenre('movie')}>Movie</button>
        <button onClick={() => setSelectedGenre('comedy')}>Comedy</button>
        <button onClick={() => setSelectedGenre('drama')}>Drama</button>
        {/* Add more buttons for other genres as needed */}
      </div>

      {/* Display the media based on the selected genre */}
      <div className="media-list">
        {media.map((item) => (
          <div key={item.id} className="media-item">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
            <h3>{item.title || item.name}</h3>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
