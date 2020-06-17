import styled from 'styled-components';
import { DARK_GREEN } from './colors';

export const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
  padding: 10%;
  
`;

export const WorkBloc = styled.div`
  flex: 1 1 350px;
  background-color: white;
  margin: 10px;
  border-radius: 30px;
  text-align: center;
`;

export const WorkTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${DARK_GREEN};
`;

export const Point = styled.p`
  color: white;
  font-size: 70px;
  text-align: center;
`;

export const Img = styled.img`
  width: 50%;
`;
