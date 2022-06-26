import ErrorMessage from 'components/Error/Error';
import ReviewsContent from 'components/ReviewsContent/ReviewsContent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/API';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        if (data.length === 0) {
          setError('Відгуки відсутні');
          return;
        }

        setReviews(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {reviews && <ReviewsContent reviews={reviews} />}
    </div>
  );
}
