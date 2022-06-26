import Cast from 'components/Cast/Cast';
import ErrorMessage from 'components/Error/Error';
import useFetchMovieCredits from 'hooks/useFetchMovieCredits';

export default function Credits() {
  const { credits, error } = useFetchMovieCredits();

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {credits && <Cast credits={credits} />}
    </div>
  );
}
