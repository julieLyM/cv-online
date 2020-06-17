import styled from 'styled-components';
import { device } from './mediaQuerries';

export const FormationContainer = styled.div`
  display: flex;

  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  padding: 2%;
  @media (${device.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormationBloc = styled.div`
  background-color: white;
  width: 65%;
  margin: 10px;
  border-radius: 30px;
`;
