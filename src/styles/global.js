import { createGlobalStyle } from 'styled-components'
import { black, white } from '../constants/colors'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${black};
    color: ${white};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`