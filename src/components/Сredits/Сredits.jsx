import Cast from 'components/Cast/Cast';
import ErrorMessage from 'components/Error/Error';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/API';

export default function Credits() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => {
        if (data.length === 0) {
          setError('Інфррмація про актора відсутня');
          return;
        }
        setCredits(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {credits && <Cast credits={credits} />}
    </div>
  );
}
