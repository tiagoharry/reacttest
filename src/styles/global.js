import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

   a {
    text-decoration: none;
    font-size: 16px;
    color: #17171C;
    font-weight: 700;
    line-height: 120%;
    transition: 0.2s ease;
   }

    a:hover {
    color:  #F6257F;
   }

   a:active {
    color:  #F6257F;
   }
`