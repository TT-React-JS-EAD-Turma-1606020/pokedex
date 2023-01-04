import { useNavigate } from "react-router-dom"
import { Container, Image, Name } from "./styles"

export const Card = ({ name, url }) => {
  const navigate = useNavigate()

  const id = url.split('/')[6]

  const handleNavigateDetails = () => {
    navigate(`/pokemon/${id}`)
  }

  return (
    <Container onClick={handleNavigateDetails}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

      <Name>{name}</Name>
    </Container>
  )
}