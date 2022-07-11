import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #eee;
    color: #002040;
  }
`;

export { GlobalStyle };
