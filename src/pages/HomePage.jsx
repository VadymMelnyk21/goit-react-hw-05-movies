import ErrorMessage from 'components/Error/Error';
import MovieList from 'components/MovieList/MovieList';
import { useFetchTrending } from '../hooks/useFetchTrending';

export default function HomePage() {
  const { movies, error } = useFetchTrending();

  return (
    <section>
      {error && <ErrorMessage message={error} />}
      {movies && <MovieList movies={movies} />}
    </section>
  );
}
