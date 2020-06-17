import styled from 'styled-components';
import { device } from './mediaQuerries';

export const FormationContainer = styled.div`
  display: flex;
  border-radius: 30px;
  justify-content: center;
  padding: 0 5%;
  @media (${device.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormationBloc = styled.div`
  background-color: white;
  width: 50%;
  margin: 10px;
  border-radius: 30px;
  @media (${device.tablet}) {
    width: 100%;
    margin: 5% 0;
  }
`;

export const FormationDiv = styled.div`
  background-color: white;
  width: 50%;
  padding: 10px;
  margin: 5px;
  border-radius: 30px;
  height: 50%;
  @media (${device.tablet}) {
    width: 100%;
  }
`;

export const FormationText = styled.div`
  color: black;
  font-size: 20px;
  padding: 3%;
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
