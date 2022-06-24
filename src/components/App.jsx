import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './Header/Header';
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  // fetchSearch('super').then(res => console.log(res));
  // fetchMovieDetails('641501').then(res => console.log(res));
  // fetchMovieCredits('746333').then(res => console.log(res));
  // fetchMovieReviews('913205').then(res => console.log(res));

  return (
    <>
      <Header />
      <Suspense fallback={'Завантаження'}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={'Не знайдено'}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
