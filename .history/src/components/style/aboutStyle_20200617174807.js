import styled from 'styled-components';
import { GREEN } from './colors';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  padding: 5%;
`;

export const AboutBloc = styled.div`
  background-color: white;
  width: 35%;
  margin: 10px;
  border-radius: 30px;
`;

export const AboutSubTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: ${GREEN};
`;

export const AboutLittleTitle = styled.span`
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: black;
  margin: 10px;
`;

export const AboutSimpleText = styled.p`
  color: black;
  font-size: 16px;
  padding: 5px 30px;
`;
export const AboutPoint = styled.span`
  color: white;
  font-size: 70px;
`;
