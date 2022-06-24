import { fetchTrending } from '../services/API';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
      15
    </div>
  );
}
