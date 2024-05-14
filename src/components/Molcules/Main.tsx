'use client';

import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const Wrapper = styled.main`
  padding-top: ${({ theme }) => `${theme.fixedValues.headerHeight}px`};
`;

const Inner = styled.section`
  padding: 16px;
`;

function Main({ children }: ChildrenType) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

export default Main;
