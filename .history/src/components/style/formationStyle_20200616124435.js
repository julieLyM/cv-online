import styled from 'styled-components';
import { device } from './mediaQuerries';

export const FormationContainer = styled.div`
  display: flex;
  border-radius: 30px;
  justify-content: center;
  padding: 0 auto;
  @media (${device.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormationBloc = styled.div`
  background-color: white;
  margin: 0 10px;
  border-radius: 30px;
`;

export const Formation = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 30px;
`;
