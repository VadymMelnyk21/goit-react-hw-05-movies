import {
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  Title,
  TitleSpan,
  Text,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';

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
  return (
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
