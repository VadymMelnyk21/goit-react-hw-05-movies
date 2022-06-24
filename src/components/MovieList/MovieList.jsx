import { List } from './MovieList.styled';
import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => {
        return (
          <MovieListItem
            key={id}
            id={id}
            tittle={original_title}
            poster={poster_path}
          />
        );
      })}
    </List>
  );
}
