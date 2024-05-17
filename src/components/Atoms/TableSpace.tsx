import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const Space = styled.div<{
  $width: string;
  $fontWeight: string;
  $flex: string;
  $type: string;
}>`
  flex: ${({ $flex }) => $flex};
  width: ${({ $width }) => $width};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  padding: 12px;
  background-color: ${({ $type, theme }) =>
    $type === 'header' ? theme.colors.primary : 'transparent'};
  border: ${({ $type, theme }) =>
    `1px solid ${
      $type === 'header' ? theme.colors.white : theme.colors.primary
    }`};
  border-left: none;
  border-top: none;
  box-sizing: border-box;
  text-align: ${({ $flex }) => ($flex === 'none' ? 'center' : 'left')};
  color: ${({ $type, theme }) => {
    switch ($type) {
      case 'header':
        return theme.colors.white;
      default:
        return theme.colors.black;
    }
  }};

  &:last-child {
    border-right: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }
`;

interface TableBodyProps extends ChildrenType {
  width: string;
  fontWeight: string;
  flex: string;
  type?: 'header' | 'body';
}

function TableSpace({
  width,
  fontWeight,
  flex,
  type = 'body',
  children,
  ...rest
}: TableBodyProps) {
  return (
    <Space
      $width={width}
      $fontWeight={fontWeight}
      $flex={flex}
      $type={type}
      {...rest}
    >
      {children}
    </Space>
  );
}

export default TableSpace;
