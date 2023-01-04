import { Container, Image, Name, PokemonCard, StatusContainer, StatusTitle, Type } from "./styles"

export const Details = () => {
  return (
    <Container>
      <PokemonCard>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon-image" />

        <Name>Bulbasaur</Name>

        <Type>Grass</Type>
        <Type>Poison</Type>
      </PokemonCard>

      <StatusContainer>
        <StatusTitle>Status</StatusTitle>
      </StatusContainer>
    </Container>
  )
}