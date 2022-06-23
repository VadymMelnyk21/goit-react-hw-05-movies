import {
  fetchTrending,
  fetchSearch,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../services/API';

import Header from './Header/Header';

export const App = () => {
  fetchTrending().then(res => console.log(res));
  fetchSearch('super').then(res => console.log(res));
  fetchMovieDetails('641501').then(res => console.log(res));
  fetchMovieCredits('746333').then(res => console.log(res));
  fetchMovieReviews('913205').then(res => console.log(res));

  return (
    <div>
      <Header />
    </div>
  );
};
