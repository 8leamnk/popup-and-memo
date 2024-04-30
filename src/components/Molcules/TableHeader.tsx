'use client';

import styled from 'styled-components';
import TableSpace from '../Atoms/TableSpace';

const S = {
  TableHeader: styled.li`
    display: flex;
    background-color: ${({ theme }) => theme.colors.peachFuzz};
  `,
};

interface HeaderInfo {
  id: number;
  children: React.ReactNode;
  width: string;
  flex: string;
}

interface TableHeaderProps {
  headerInfo: HeaderInfo[];
}

function TableHeader({ headerInfo }: TableHeaderProps) {
  return (
    <S.TableHeader>
      {headerInfo.map((item) => {
        return (
          <TableSpace
            key={item.id}
            width={item.width}
            fontWeight="bold"
            flex={item.flex}
          >
            {item.children}
          </TableSpace>
        );
      })}
    </S.TableHeader>
  );
}

export default TableHeader;
