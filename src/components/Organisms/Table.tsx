'use client';

import React from 'react';
import styled from 'styled-components';
import TableBody from '../Molcules/TableBody';
import { DataType, TableBodyInfo, TableHeaderInfo } from '@/constants/types';
import TableHeader from '../Molcules/TableHeader';

const Wrapper = styled.ul<{
  $width: string;
}>`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.pristine}`};
  box-sizing: border-box;
  padding: 0;
`;

interface TableProps<TableListType> {
  width: string;
  tableLists: TableListType[];
  headerInfo: TableHeaderInfo[];
  getBodyInfo: (list: TableListType, index: number) => TableBodyInfo[];
}

function Table<TableListType extends DataType>({
  width,
  tableLists,
  headerInfo,
  getBodyInfo,
}: TableProps<TableListType>) {
  return (
    <Wrapper $width={width}>
      <TableHeader headerInfo={headerInfo} />

      {tableLists.map((list, index) => {
        const bodyInfo = getBodyInfo(list, index);

        return <TableBody key={list.id} bodyInfo={bodyInfo} />;
      })}
    </Wrapper>
  );
}

export default Table;
