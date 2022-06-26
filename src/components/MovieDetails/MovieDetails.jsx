import {
  Container,
  DetailsContainer,
  Image,
  InfoContainer,
  Title,
  TitleSpan,
  Text,
  MoreNavigate,
  MoreInfo,
  More,
  MoreList,
  MoreItem,
  LinkTo,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function MovieDetails({ movieInfo }) {
  const {
    originalTitle,
    title,
    genres,
    overview,
    poster,
    releaseDate,
    voteAverage,
  } = movieInfo;

  const genresArray = genres.map(genre => genre.name).join(', ');

  const location = useLocation();

  return (
    <Container>
      <DetailsContainer>
        <Image
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : 'https://image.tmdb.org/t/p/w500/4XlgNK3hLcw5yemwZYMkBvvyf1A.jpg'
          }
          alt={title}
        />
        <InfoContainer>
          <Title>
            {originalTitle ? originalTitle : 'Тут мав бути заголовок'}
          </Title>
          <Text>
            <TitleSpan>Нашою мовою: </TitleSpan> {title ? title : 'Не перевели'}
          </Text>
          <Text>
            <TitleSpan>Рейтинг: </TitleSpan>{' '}
            {voteAverage ? voteAverage : 'Відсутній'}
          </Text>
          <Text>
            <TitleSpan>Дата релізу: </TitleSpan>{' '}
            {releaseDate ? releaseDate : 'Давай не зарас'}
          </Text>
          <Text>
            <TitleSpan>Жанри: </TitleSpan>{' '}
            {genresArray ? genresArray : 'Неповторні'}
          </Text>
          <Text>
            <TitleSpan>Опис: </TitleSpan>
            {overview
              ? overview
              : ' Тут мав бути опис, але краще оди раз побачити ніж сто раз прочитати про фільм.'}
          </Text>
        </InfoContainer>
      </DetailsContainer>
      <MoreInfo>
        <More>Дізнатись більше</More>
      </MoreInfo>
      <MoreNavigate>
        <MoreList>
          <MoreItem>
            <LinkTo to="credits" state={location.state}>
              Акторський склад
            </LinkTo>
          </MoreItem>
          <MoreItem>|</MoreItem>
          <MoreItem>
            <LinkTo to="reviews" state={location.state}>
              Відгуки
            </LinkTo>
          </MoreItem>
        </MoreList>
      </MoreNavigate>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    originalTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
  }).isRequired,
};
