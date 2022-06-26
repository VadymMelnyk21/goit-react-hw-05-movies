import ErrorMessage from 'components/Error/Error';
import ReviewsContent from 'components/ReviewsContent/ReviewsContent';
import useFetchMovieReviews from 'hooks/useFetchMovieReviews';

export default function Reviews() {
  const { reviews, error } = useFetchMovieReviews();

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {reviews && <ReviewsContent reviews={reviews} />}
    </div>
  );
}
