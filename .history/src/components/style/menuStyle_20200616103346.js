import styled from 'styled-components';
import { GREEN } from './colors';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
  padding: 10px;
  writing-mode: vertical-rl;
  /* transform: scale(-1); */

  text-orientation: upright;
`;

export const MenuTitle = styled.p`
  font-size: 18px;
  font-weight: 900;

  text-transform: uppercase;
`;

export const MenuBlocPicture = styled.div``;

export const MenuPicture = styled.img`
  width: 100px;
  height: 100px;
`;

export const MenuBlocLink = styled.div`
  cursor: not-allowed;
  align-self: center;
  a {
    text-decoration: none;
  }
`;

export const GreenLink = styled(Link)`
  color: ${GREEN};
  font-size: 26px;
  margin: 0 10px;
`;
