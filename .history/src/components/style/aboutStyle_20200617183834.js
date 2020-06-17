import styled from 'styled-components';
import { GREEN } from './colors';
import { device } from './mediaQuerries';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  padding: 0 5%;
`;

export const AboutBloc = styled.div`
  background-color: white;
  width: 40%;
  margin: 10px;
  border-radius: 30px;
  padding: 2%;
  @media (${device.mobileL}) {
    width: 30%;
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: ${GREEN};
`;

export const AboutLittleTitle = styled.span`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: black;
`;

export const AboutSimpleText = styled.div`
  color: black;
  font-size: 18px;
  padding: 5px 30px;
`;
export const AboutPoint = styled.span`
  color: white;
  font-size: 70px;
`;
