import { ButtonStyled } from "./styles"

export const Button = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}