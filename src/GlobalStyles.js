import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: ${(props) => props.theme.primaryText};
    background-color: ${(props) => props.theme.backgroundColor};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
