import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 0px;
    padding: 0;
    background-color: black;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`

export default GlobalStyle
