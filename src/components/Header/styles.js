import styled from 'styled-components';
import { red } from '../../constants/colors';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${red};
  margin-bottom: 3.5rem;
`;

export const Logo = styled.img`
  width: 150px;
`;
