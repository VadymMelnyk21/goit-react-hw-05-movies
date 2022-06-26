import Cast from 'components/Cast/Cast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/API';

export default function Credits() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => setCredits(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return <div>{credits && <Cast credits={credits} />}</div>;
}
