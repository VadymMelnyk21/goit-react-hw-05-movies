import { List, Item, Image, Title } from './Cast.styled';

export default function Cast({ credits }) {
  return (
    <>
      <List>
        {credits.map(({ id, name, profilePath }) => {
          return (
            <Item key={id}>
              <div>
                <Image
                  src={
                    profilePath
                      ? `https://image.tmdb.org/t/p/w500${profilePath}`
                      : 'Постер відсутній'
                  }
                  alt={name}
                />
              </div>
              <Title>{name ? name : 'Без імені'}</Title>
            </Item>
          );
        })}
      </List>
    </>
  );
}
