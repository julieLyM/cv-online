import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* width: 50%; */
  border-radius: 30px;
  margin: 10;px
  justify-content: space-between;
  padding: 5%;
`;

export const AboutBloc = styled.div`
  background-color: white;
  width: 45%;
  border-radius: 30px;
`;

export const AboutSimpleText = styled.p`
  color: black;
  font-size: 16px;
  padding: 5px 30px;
`;

export const AboutSubTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;
