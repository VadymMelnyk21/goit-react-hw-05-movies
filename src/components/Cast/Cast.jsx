import { Container, List, Item, Image, Title } from './Cast.styled';
import PropTypes from 'prop-types';

export default function Cast({ credits }) {
  return (
    <Container>
      <List>
        {credits.map(({ id, name, profilePath }) => {
          return (
            <Item key={id}>
              <div>
                <Image
                  src={
                    profilePath
                      ? `https://image.tmdb.org/t/p/w500${profilePath}`
                      : 'https://image.tmdb.org/t/p/w500/dBoOporkAEgZvRFz2h1Qi3ZozId.jpg'
                  }
                  alt={name}
                />
              </div>
              <Title>{name ? name : 'Без імені'}</Title>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

Cast.propTypes = {
  credits: PropTypes.array.isRequired,
};
