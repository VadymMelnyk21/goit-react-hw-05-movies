import { fetchTrending } from '../services/API';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/Error/Error';

export default function HomePage() {
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

  return (
    <section>
      {error && <ErrorMessage message={error} />}
      {movies && <MovieList movies={movies} />}
    </section>
  );
}
