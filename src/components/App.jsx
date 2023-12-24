import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const MovieCredits = lazy(() => import('./Credits/MovieCredits'));
const MovieReviews = lazy(() => import('./Reviews/MovieRewiews'));
const Search = lazy(() => import('./Search/Search'));

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={`${styles.navLink} ${isHome ? styles.activeLink : ''}`}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/search" className={`${styles.navLink} ${!isHome ? styles.activeLink : ''}`}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/credits" element={<MovieCredits />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
