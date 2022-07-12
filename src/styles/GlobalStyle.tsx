import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { variables } from './variables';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables};

  body {
    min-height: 100%;
    background-color: var(--bg);
    font-size: var(--step-0);
    color: var(--clr-primary);
  }
`;

export { GlobalStyle };
