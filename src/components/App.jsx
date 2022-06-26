import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader/Loader';
import NotFound from 'pages/NotFound';
import Header from './Header/Header';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPages from 'pages/MovieDetailsPage';
import Credits from './Сredits/Сredits';
import Reviews from './Reviews/Reviews';
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPages />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
