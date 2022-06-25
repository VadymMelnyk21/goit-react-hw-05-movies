import ErrorMessage from 'components/Error/Error';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';

export default function MovieDetailsPages() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

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
        {error && <ErrorMessage message={error} />}
        {movieDetails && <MovieDetails movieInfo={movieDetails} />}
        <Outlet />
      </>
    </section>
  );
}
