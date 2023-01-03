import { Input } from "../../components/Input"
import { Container } from "./styles"

export const Home = () => {
  return (
    <Container>
      <Input name='search' label='Busca' />
    </Container>
  )
}