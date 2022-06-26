import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearch } from '../services/API';
import ErrorMessage from 'components/Error/Error';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [spiner, setSpiner] = useState(false);

  const formSubmit = value => {
    setSearchParams({ query: value });
  };

  const formErrorMessage = () => {
    setMovies([]);
    setError('Ви ввели пустий рядок!');
  };

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    if (!currentQuery) return;
    setSpiner(true);
    fetchSearch(currentQuery)
      .then(data => {
        if (data.length === 0) {
          setMovies([]);
          setError('Контент відсутній спробуйте ввести інший запит');
          return;
        }
        setMovies(data);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(setSpiner(false));
  }, [searchParams]);

  return (
    <section>
      <SearchForm formSubmit={formSubmit} errorMessage={formErrorMessage} />
      {spiner && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies && <MovieList movies={movies} />}
    </section>
  );
}
