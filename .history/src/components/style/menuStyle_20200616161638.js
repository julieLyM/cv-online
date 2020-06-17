import styled from 'styled-components';
import { GREEN } from './colors';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  min-height: 9%;
  justify-content: space-between;
`;

export const MenuTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const MenuPicture = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    color: green;
  }
`;

export const MenuBlocLink = styled.div`
  cursor: not-allowed;
  writing-mode: vertical-rl;
  transform: scale(-1);
  align-self: center;
  a {
    text-decoration: none;
  }
`;

export const GreenLink = styled(Link)`
  color: ${GREEN};
  font-size: 26px;
  padding: 10px;
  &:hover {
    color: green;
  }
`;
