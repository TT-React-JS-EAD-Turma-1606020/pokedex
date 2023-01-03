import { Input } from "../../components/Input"
import { Container, InputContainer } from "./styles"

export const Home = () => {
  return (
    <Container>
      <InputContainer>
        <Input name='search' label='Busca' />
      </InputContainer>
    </Container>
  )
}