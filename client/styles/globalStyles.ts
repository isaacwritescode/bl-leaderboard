import { createGlobalStyle } from "styled-components";
import theme from "../themes/default/default";

export const GlobalStyles = createGlobalStyle`

  body{
    background: ${theme.palette.background};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version */
    -webkit-tap-highlight-color: transparent; 
  }

  /* Scrollbar */

  /* Width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #eee;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ddd;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
`;
