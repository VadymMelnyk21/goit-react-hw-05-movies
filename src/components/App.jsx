import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader/Loader';
import NotFound from 'pages/NotFound';
import Header from './Header/Header';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPages from 'pages/MovieDetailsPage';
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  // fetchSearch('super').then(res => console.log(res));
  // fetchMovieDetails('641501').then(res => console.log(res));
  // fetchMovieCredits('746333').then(res => console.log(res));
  // fetchMovieReviews('913205').then(res => console.log(res));

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPages />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
