'use client';

import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => `${theme.fontSize.base}px`};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default GlobalStyle;
