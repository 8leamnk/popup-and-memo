'use client';

import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Navigation({ children }: ChildrenType) {
  return <Wrapper>{children}</Wrapper>;
}

export default Navigation;
