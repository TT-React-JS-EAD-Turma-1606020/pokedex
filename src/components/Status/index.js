import { Container, Label, StatusContainer, Value } from "./styles"

export const Status = ({ name, value }) => {

  return (
    <Container>
      <Label>{name}</Label>

      <StatusContainer>
        <Value> {value}/255 </Value>
      </StatusContainer>
    </Container>
  )
}