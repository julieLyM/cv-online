import styled from 'styled-components';
import { DARK_GREEN, GREEN } from './colors';

export const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
  padding: 10%;
`;

export const WorkBloc = styled.div`
  flex: 1 1 250px;
  background-color: white;
  margin: 10px;
  color: ${GREEN};
  height: 300px;
  border-radius: 30px;
  text-align: center;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: green;
  }
`;

export const WorkTitle = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${DARK_GREEN};
  margin: 0;
  padding: 0;
`;

export const Point = styled.p`
  color: white;
  font-size: 70px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
`;

export const Img = styled.img`
  width: 200px;
`;