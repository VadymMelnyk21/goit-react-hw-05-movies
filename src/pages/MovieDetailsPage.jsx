import BackButton from 'components/BackButton/BackButton';
import ErrorMessage from 'components/Error/Error';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';

export default function MovieDetailsPages() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        if (data.length === 0) {
          setMovieDetails([]);
          setError('Інфррмація про фільм відсутня');
          return;
        }

        setMovieDetails(data);
      })
      .catch(error => setError(error.message));
  }, [movieId, setMovieDetails]);

  return (
    <section>
      <>
        <BackButton location={backLink} />
        {error && <ErrorMessage message={error} />}
        {movieDetails && <MovieDetails movieInfo={movieDetails} />}
        <Outlet />
      </>
    </section>
  );
}
