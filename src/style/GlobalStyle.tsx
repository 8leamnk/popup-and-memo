'use client';

import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => `${theme.fontSize.base}px`};
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  h1 {
    font-size: ${({ theme }) => `${theme.fontSize.xLarge}px`};
    margin: 0;
  }
  
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
