import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const apiKey = 'dc71c629f4ca67f402f49e08e52c86a0';

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const filteredMovies = movies.filter(movie => movie.title);

  return (
    <div className={styles.container}>
      <h2>Movies Search Page</h2>
      <ul className={styles.movieList}>
        {filteredMovies.map(movie => (
          <li key={movie.id} className={styles.movieListItem}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location } }} className={styles.movieLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
