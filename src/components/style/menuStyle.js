import styled from 'styled-components';
import { GREEN } from './colors';
import { Link } from 'react-router-dom';
import { device } from './mediaQuerries';

export const MenuContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  min-height: 97%;
  max-height: 100%;
  justify-content: space-between;
  @media (${device.tablet}) {
    min-height: 100%;
  }
  @media (${device.mobileL}) {
  }
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
  @media (${device.mobileL}) {
    width: 70px;
    height: 80px;
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
  font-size: 24px;
  padding: 10px 0;
  align-self: center;
  text-transform: uppercase;
  &:hover {
    color: green;
  }
  @media (${device.mobileL}) {
    font-size: 20px;
  }
`;

export const GreenLinkBottom = styled.a`
  color: ${GREEN};
  font-size: 24px;
  padding: 10px 0;
  text-transform: uppercase;
  &:hover {
    color: green;
  }
  @media (${device.mobileL}) {
    font-size: 20px;
  }
`;
