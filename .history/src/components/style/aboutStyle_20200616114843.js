import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  border-radius: 30px;
  justify-content: space-between;
  padding: 5%;
  margin: 0 auto;
`;

export const AboutBloc = styled.div`
  background-color: white;
  width: 45%;
  margin: 10px;
  border-radius: 30px;
`;

export const AboutSubTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const AboutLittleTitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  color: black;
`;

export const AboutSimpleText = styled.p`
  color: black;
  font-size: 16px;
  padding: 5px 30px;
`;
