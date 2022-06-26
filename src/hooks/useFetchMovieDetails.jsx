import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/API';

export default function useFetchMovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
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
  return { movieDetails, error };
}
