import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 40px auto;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ImageContainer = styled.div`
  width: 70%;
`;

export const InfoContainer = styled.div`
  padding: 30px;
  color: #42362b;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  color: #5db09d;
`;
