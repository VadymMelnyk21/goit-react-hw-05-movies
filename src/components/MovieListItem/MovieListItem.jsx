import { Item, Image, Title } from './MovieListItem.styled';
import { Link, useLocation } from 'react-router-dom';

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
                : 'Постер відсутній'
            }
            alt="{title}"
          />
        </div>
        <Title>{tittle ? tittle : 'Без назви'}</Title>
      </Link>
    </Item>
  );
}
