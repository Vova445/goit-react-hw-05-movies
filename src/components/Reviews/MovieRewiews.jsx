import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const apiKey = 'dc71c629f4ca67f402f49e08e52c86a0';

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error fetching movie reviews:', error));
  }, [apiKey, movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h2>Movie Reviews Page</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <h3 className={styles.author}>{review.author}</h3>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noReviews}>
          <p>No reviews available for this movie.</p>
          <Link to="/search" className={styles.searchLink}>
            Go to Search
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
