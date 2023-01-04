import styled from 'styled-components';
import { black, gray } from '../../constants/colors';

export const Container = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const PokemonCard = styled.div`
  padding: 1rem 2rem;
  background-color: ${gray};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 15rem;
`

export const Name = styled.span`
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;
`

export const Type = styled.div`
  background-color: ${black};
  font-size: 14px;
  border-radius: 100rem;
  padding: 0.5rem;
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: .25rem;
  text-transform: capitalize;
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const StatusTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  margin-bottom: 2rem;
`

export const StatusValues = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  flex: 1;
  align-items: center;
  justify-content: center;
`