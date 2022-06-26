import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import Header from './Header/Header';
import Loader from './Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage'));
const Credits = lazy(() => import('./Сredits/Сredits'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPages = lazy(() => import('pages/MovieDetailsPage'));

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
