import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollbarTrack};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.scrollbarThumbHover};
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) =>
      `${props.theme.scrollbarThumb} ${props.theme.scrollbarTrack}`};
  }

  /* Other global styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
