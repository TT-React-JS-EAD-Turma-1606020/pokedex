import styled from 'styled-components';
import { gray } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${gray};
  padding: 1rem;
  width: 10rem;
  height: 10rem;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Name = styled.span`
  font-size: 16px;
  margin-top: .75rem;
  text-align: center;
`;
