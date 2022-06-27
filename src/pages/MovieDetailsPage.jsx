import BackButton from 'components/BackButton/BackButton';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  padding: 0 230px;
`;

export default function MovieDetailsPages() {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  const { movieDetails, error } = useFetchMovieDetails();

  return (
    <Section>
      <Container>
        <BackButton location={backLink} />
        {error && <Navigate to="/" replace />}
        {movieDetails && <MovieDetails movieInfo={movieDetails} />}
      </Container>
    </Section>
  );
}
