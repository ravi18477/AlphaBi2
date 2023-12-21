import React, { useEffect, useState} from 'react';
import profimg from '../images/profimg.jpg';
import profile2 from '../images/profile2.webp'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function About() {


  const [query, setQuery] = useState('anime');
  const [gifs, setGifs] = useState([]);
  const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=30`
        );
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [query, apiKey])

  
  
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Giphy Search</h1>
      <input
        type="text"
        placeholder="Search for GIFs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <br />
      <br />

      <div>
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            style={{ marginBottom: '10px' }} // Set the width and margin bottom
          />
        ))}
      </div>
    </div>
  );
};


export default About


// import React, { useState } from 'react';

// const GiphySearch = () => {
  
//   return (
    
//   );
// };

// export default GiphySearch;