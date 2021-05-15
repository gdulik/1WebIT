import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::after,
    &::before {
      box-sizing: border-box;
    }
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    background-image: -o-linear-gradient(
        315deg,
        #8052EC,
        #D161FF
    );
    background-image: linear-gradient(
        135deg,
        #8052EC,
        #D161FF
    );
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles
