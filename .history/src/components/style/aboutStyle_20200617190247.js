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
  @media (${device.tablet}) {
    width: 100%;
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: ${GREEN};
  @media (${device.tablet}) {
    font-size: 20px;
  }
`;

export const AboutLittleTitle = styled.span`
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: black;
  @media (${device.tablet}) {
    font-size: 20px;
  }
`;

export const AboutSimpleText = styled.div`
  color: black;
  font-size: 20px;
  padding: 5px 30px;
  @media (${device.tablet}) {
    font-size: 18px;
  }
`;
export const AboutPoint = styled.span`
  color: white;
  font-size: 70px;
`;
