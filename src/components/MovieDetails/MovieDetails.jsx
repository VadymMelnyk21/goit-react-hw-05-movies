import {
  Container,
  DetailsContainer,
  ImageContainer,
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
        <ImageContainer>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : 'Постер відсутній'
            }
            alt={title}
          />
        </ImageContainer>
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
            <LinkTo to="credits" state={{ from: location }}>
              Акторський склад
            </LinkTo>
          </MoreItem>
          <MoreItem>|</MoreItem>
          <MoreItem>
            <LinkTo to="reviews" state={{ from: location }}>
              Огляд
            </LinkTo>
          </MoreItem>
        </MoreList>
      </MoreNavigate>
      <Outlet />
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
