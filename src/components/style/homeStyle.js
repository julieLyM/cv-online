import styled from 'styled-components';
import { GREEN } from './colors';
import { device } from './mediaQuerries';

export const APPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${device.mobileL}) {
    margin: 0;
    padding: 0;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${GREEN};
  @media (${device.mobileL}) {
  
  }
`;

export const HomeTitle = styled.p`
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const HomeSubtitle = styled.p`
  color: ${GREEN};
  font-size: 18px;
`;

export const HomePicture = styled.img`
  @media (${device.mobileL}) {
    width: 300px;
    height: 350px;
  }
`;
