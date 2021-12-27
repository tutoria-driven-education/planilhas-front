import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  body {
    background-color: #1c1a22;

    font-family: 'Ubuntu', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalCSS;
