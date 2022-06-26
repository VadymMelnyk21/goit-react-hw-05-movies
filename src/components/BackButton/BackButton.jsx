import { Button } from './BackButton.styled';

export default function BackButton({ location }) {
  return (
    <>
      <Button to={location}> В той бік</Button>
    </>
  );
}
