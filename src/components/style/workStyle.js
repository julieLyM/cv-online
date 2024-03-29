import styled from 'styled-components';
import { DARK_GREEN, GREEN } from './colors';
import { device } from './mediaQuerries';

export const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
  padding: 5% 3%;

`;

export const WorkBloc = styled.div`
  flex: 1 1 250px;
  background-color: white;
  margin: 10px;
  padding: 1%;
  color: ${GREEN};
  height: 350px;
  border-radius: 30px;
  text-align: center;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: green;
  }
  @media (${device.tablet}) {
    width: 100%;
    height: 100%;
  }
`;

export const WorkTitle = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${DARK_GREEN};
  margin-top: 10%;

`;

export const Point = styled.p`
  color: white;
  font-size: 70px;
  text-align: center;
  margin: 0;
  padding: 10px 0;
  @media (${device.tablet}) {
    font-size: 46px;
  }
  @media (${device.mobileL}) {
    font-size: 46px;
  }
  @media (${device.mobileS}) {
    font-size: 46px;
  }
`;

export const Img = styled.img`
  width: 200px;
  @media (${device.mobileL}) {
    width: 100%;
    height: 100%;
  }
`;
