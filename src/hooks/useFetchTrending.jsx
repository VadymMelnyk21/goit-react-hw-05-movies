import { useEffect, useState } from 'react';
import { fetchTrending } from '../services/API';

export const useFetchTrending = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(data => {
        setMovies(data.results);

        if (data.results.length === 0) {
          setError('Контент відсутній');
        }
      })
      .catch(error => setError(error.message));
  }, []);

  return { movies, error };
};
