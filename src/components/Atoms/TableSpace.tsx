import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

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

interface TableBodyProps extends ChildrenType {
  width: string;
  fontWeight: string;
  flex: string;
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
