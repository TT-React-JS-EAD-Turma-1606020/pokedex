import styled from 'styled-components';
import { gray, white } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 18px;
  margin-right: 1rem;
  width: 13rem;
  text-transform: capitalize;
`;

export const StatusContainer = styled.div`
  background-color: ${white};
  border-radius: 0 5rem 5rem 0;
  width: 100%;
  display: flex;
  height: 1.5rem;
`;

export const Value = styled.div`
  background-color: ${gray};
  width: ${({ width }) => width}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 0 5rem 5rem 0;

`;
