'use client';

import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }

  main {
    padding: 16px;
  }
`;

export default GlobalStyle;
