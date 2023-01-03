import { Container, Image, Name } from "./styles"

export const Card = ({ name, imageSrc }) => {
  return (
    <Container>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />

      <Name>Bulbasaur</Name>
    </Container>
  )
}