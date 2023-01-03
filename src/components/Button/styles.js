import styled from 'styled-components';
import { red, white } from '../../constants/colors';

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: ${red};
  border-radius: 1rem;
  padding: 1rem;
  color: ${white};
  font-family: Varela, sans-serif;
  font-family: 16px;
  cursor: pointer;
`;
