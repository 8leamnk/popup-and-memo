'use client';

import React from 'react';
import styled from 'styled-components';
import TableSpace from '../Atoms/TableSpace';
import { TableBodyInfo } from '@/constants/types';

const S = {
  TableBody: styled.li`
    display: flex;
  `,
};

interface TableBodyProps {
  bodyInfo: TableBodyInfo[];
}

function TableBody({ bodyInfo }: TableBodyProps) {
  return (
    <S.TableBody>
      {bodyInfo.map((item) => {
        return (
          <TableSpace
            key={item.id}
            width={item.width}
            fontWeight={item.fontWeight}
            flex={item.flex}
          >
            {item.children}
          </TableSpace>
        );
      })}
    </S.TableBody>
  );
}

export default TableBody;
