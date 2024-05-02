'use client';

import styled from 'styled-components';

const Space = styled.div<{
  $width: string;
  $fontWeight: string;
  $flex: string;
}>`
  flex: ${({ $flex }) => $flex};
  width: ${({ $width }) => $width};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  padding: 8px;
  border: ${({ theme }) => `1px solid ${theme.colors.pristine}`};
  box-sizing: border-box;
  text-align: ${({ $flex }) => ($flex === 'none' ? 'center' : 'left')};
`;

interface TableBodyProps {
  width: string;
  fontWeight: string;
  flex: string;
  children: React.ReactNode;
}

function TableSpace({
  width,
  fontWeight,
  flex,
  children,
  ...rest
}: TableBodyProps) {
  return (
    <Space $width={width} $fontWeight={fontWeight} $flex={flex} {...rest}>
      {children}
    </Space>
  );
}

export default TableSpace;
