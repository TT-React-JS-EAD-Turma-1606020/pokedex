import { Container, Label, StatusContainer, Value } from "./styles"

export const Status = () => {
  return (
    <Container>
      <Label> HP </Label>

      <StatusContainer>
        <Value> 20/255 </Value>
      </StatusContainer>
    </Container>
  )
}