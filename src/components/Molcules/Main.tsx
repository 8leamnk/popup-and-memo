'use client';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding-top: ${({ theme }) => `${theme.fixedValues.headerHeight}px`};
`;

const Inner = styled.section`
  padding: 16px;
`;

function Main({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

export default Main;
