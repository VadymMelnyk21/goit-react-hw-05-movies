import {
  Container,
  List,
  Item,
  Text,
  TextBold,
  TextTitle,
} from './ReviewsContent.styled';

export default function ReviewsContent({ reviews }) {
  return (
    <Container>
      <List>
        {reviews.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <TextBold>{author}</TextBold>

              <Text>
                <TextTitle>Відгук:</TextTitle> {content}
              </Text>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}
