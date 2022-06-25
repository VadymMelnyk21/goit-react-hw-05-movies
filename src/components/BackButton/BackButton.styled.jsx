import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  position: absolute;
  top: 100px;
  left: 5%;
  padding: 10px 15px 10px 20px;
  border-radius: 2px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #42362b;

  font-size: 18px;
  font-weight: 700;
  color: #fff;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: color 150ms linear;

  &:hover,
  &:focus {
    color: #5db09d;
  }
`;
