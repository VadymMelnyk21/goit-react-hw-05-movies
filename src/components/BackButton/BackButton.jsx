import { Button } from './BackButton.styled';
import PropTypes from 'prop-types';

export default function BackButton({ location }) {
  return (
    <>
      <Button to={location}> В той бік</Button>
    </>
  );
}

BackButton.propTypes = {
  location: PropTypes.any.isRequired,
};
