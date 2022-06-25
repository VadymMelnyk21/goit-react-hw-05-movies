import PropTypes from 'prop-types';
import { Text } from './Error.styled';

export default function ErrorMessage({ message }) {
  return <Text>{message}</Text>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
