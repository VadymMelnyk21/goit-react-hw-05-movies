import { Item, Image, Title } from './MovieListItem.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieListItem({ id, tittle, poster }) {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Image
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : 'https://image.tmdb.org/t/p/w500/4XlgNK3hLcw5yemwZYMkBvvyf1A.jpg'
            }
            alt="{title}"
          />
        </div>
        <Title>{tittle ? tittle : 'Без назви'}</Title>
      </Link>
    </Item>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  tittle: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
