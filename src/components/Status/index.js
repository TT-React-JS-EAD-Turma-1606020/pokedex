import { Container, Label, StatusContainer, Value } from "./styles";

const maxStatus = 255

export const Status = ({ name, value }) => {

  const widthValue = ((100 * value) / maxStatus).toFixed(0);

  return (
    <Container>
      <Label>{name}</Label>

      <StatusContainer>
        <Value width={widthValue}> {value}/255 </Value>
      </StatusContainer>
    </Container>
  )
}