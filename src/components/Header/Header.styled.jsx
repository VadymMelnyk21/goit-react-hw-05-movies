import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  /* top: 0; */
  /* left: 0; */
  /* position: sticky; */
  /* z-index: 1100; */
  display: flex;
  align-items: center;
  min-height: 39px;
  padding: 10px 70px;
  color: #fff;
  background-color: #5db09d;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  position: relative;

  transition: color 150ms linear;

  &:nth-child(2) {
    margin-left: 24px;
  }

  &:hover,
  &:focus {
    color: #42362b;
  }

  &.active {
    color: #42362b;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background-color: #42362b;

      position: absolute;
      left: 0;
      bottom: -18px;
    }
  }
`;
