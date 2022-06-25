import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
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

export const MoreInfo = styled.div`
  background-color: #5db09d;
  height: 30px;
`;

export const More = styled.span`
  display: inline-block;
  margin-left: 20px;
  margin-top: 8px;
  padding: 4px 10px;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  z-index: 22;

  &::after {
    content: '';
    position: absolute;
    display: block;
    z-index: -1;
    width: 100%;
    height: 30px;
    background-color: #42362b;
    border-radius: 2px;

    left: 0;
    bottom: -4px;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
