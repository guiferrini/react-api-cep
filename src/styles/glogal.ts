// CSS Global
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px Jost, sans-serif;
  }

  #root{
    background-color: #E6E6FA;
    max-width: 500px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
