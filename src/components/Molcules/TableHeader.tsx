'use client';

import styled from 'styled-components';
import TableSpace from '../Atoms/TableSpace';
import { TableHeaderInfo } from '@/constants/types';

const S = {
  TableHeader: styled.li`
    display: flex;
  `,
};

interface TableHeaderProps {
  headerInfo: TableHeaderInfo[];
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
            type="header"
          >
            {item.children}
          </TableSpace>
        );
      })}
    </S.TableHeader>
  );
}

export default TableHeader;
