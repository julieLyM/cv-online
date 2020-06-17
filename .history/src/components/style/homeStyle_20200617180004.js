import styled from 'styled-components';
import { GREEN } from './colors';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${GREEN};
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
