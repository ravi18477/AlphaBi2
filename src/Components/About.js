import React, { useState, useEffect } from 'react';
// import './styles.css'; // Import the external CSS file

const About= () => {
  const [query, setQuery] = useState('anime');
  const [gifs, setGifs] = useState([]);
  const apiKey = 'wQQIdpjHAtkID8Z4P6klQSUr7k7ddhCC';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=20`
        );
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [query, apiKey]);

  return (
    <div className="container">
      <h1>Giphy Search</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() => {
            /* Handle search */
          }}
          className="search-button"
        >
          Search
        </button>
      </div>

      <div className="gif-container">
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="gif-image"
          />
        ))}
      </div>
    </div>
  );
};

export default About;
