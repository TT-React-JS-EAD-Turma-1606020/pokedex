import { Container, InputStyled, Label } from "./styles"

export const Input = ({ name, label, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>

      <InputStyled
        name={name}
        {...rest}
      />
    </Container>
  )
}