import styled from 'styled-components';
import { GREEN } from './colors';
import { device } from './mediaQuerries';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 3%;
`;

export const AboutBloc = styled.div`
  background-color: white;
  width: 60%;
  padding: 3%;

  border-radius: 30px;
  @media (${device.laptop}) {
    width: 95%;
  }
  @media (${device.tablet}) {
    width: 90%;
  }
  @media (${device.mobileL}) {
    width: 80%;
  }
`;

export const AboutSubTitle = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: ${GREEN};
  font-weight: 900;
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
    font-size: 16px;
  }
  @media (${device.mobileL}) {
    font-size: 14px;
  }
`;

export const AboutSimpleText = styled.p`
  color: black;
  font-size: 20px;
  margin: 10px;
  padding: 0;
  text-align: center;
  @media (${device.tablet}) {
    font-size: 16px;
  }
  @media (${device.mobileL}) {
    font-size: 16px;
  }
  @media (${device.mobileS}) {
    font-size: 14px;
  }
`;

export const AboutText = styled.p`
  font-size: 20px;
  @media (${device.tablet}) {
    font-size: 16px;
  }
  @media (${device.mobileL}) {
    font-size: 16px;
  }
  @media (${device.mobileS}) {
    font-size: 14px;
  }
`;

export const AboutPoint = styled.p`
  font-size: 50px;
  text-align: center;
  @media (${device.tablet}) {
    font-size: 30px;
  }
`;

export const AboutPicture = styled.img`
  width: 130px;
  height: 160px;

  border-radius: 20px;
  @media (${device.mobileL}) {
    width: 80px;
    height: 100px;
  }
`;

export const AboutPersonalDiv = styled.div`
  display: flex;
  padding: 5%;
  @media (${device.mobileL}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutPersonalDivColPic = styled.div`
  width: 30%;
  @media (${device.mobileL}) {
    align-self: center;
  }
`;

export const AboutPersonalDivCol1 = styled.div`
  width: 30%;
  @media (${device.tablet}) {
    width: 30%;
  }
  @media (${device.mobileL}) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const AboutPersonalDivCol2 = styled.div`
  width: 40%;
  margin-left: 20px;
  @media (${device.tablet}) {
    width: 40%;
    margin-left: 0;
  }
  @media (${device.mobileL}) {
    width: 100%;
  }
`;
