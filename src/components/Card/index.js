import { Container, Image, Name } from "./styles"

export const Card = ({ name, url }) => {
  const id = url.split('/')[6]

  return (
    <Container>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

      <Name>{name}</Name>
    </Container>
  )
}