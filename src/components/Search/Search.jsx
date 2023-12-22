import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Search.module.css';

const apiKey = 'dc71c629f4ca67f402f49e08e52c86a0';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, [query]);

  const handleLinkClick = () => {
    localStorage.setItem('searchQuery', query);
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setQuery(savedQuery);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>Movie Search Page</h2>
      <input
        type="text"
        placeholder="Enter a movie title..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieListItem}>
            <Link
              to={`/movies/${movie.id}`}
              className={styles.movieLink}
              state={{ fromSearch: true }}
              onClick={() => handleLinkClick(movie.id)}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
