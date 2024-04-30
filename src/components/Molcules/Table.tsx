'use client';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul<{
  $width: string;
}>`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.pristine}`};
  box-sizing: border-box;
  padding: 0;
`;

interface TableProps {
  width: string;
  children: React.ReactNode;
}

function Table({ width, children }: TableProps) {
  return <Wrapper $width={width}>{children}</Wrapper>;
}

export default Table;
