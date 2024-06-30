import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${theme.COLORS.BACKGROUND_800};
    color: ${theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;

  }

  body, input, button, textarea{
    font-family:'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover , a:hover {
    filter: brightness(0.8);
  }
`;
