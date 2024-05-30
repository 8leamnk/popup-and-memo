'use client';

import React from 'react';
import styled from 'styled-components';
import TableBody from '../Molcules/TableBody';
import {
  TableBodyInfo,
  TableHeaderInfo,
  TableListInfo,
} from '@/constants/types';
import TableHeader from '../Molcules/TableHeader';

const Wrapper = styled.ul<{
  $maxWidth: string;
}>`
  width: ${({ $maxWidth }) => `clamp(320px, 100%, ${$maxWidth})`};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-right: none;
  border-bottom: none;
  box-sizing: border-box;
`;

interface TableProps<TableListType> {
  maxWidth?: string;
  headerInfo: TableHeaderInfo[];
  tableLists: TableListType[];
  getBodyInfo: (list: TableListType, index: number) => TableBodyInfo[];
}

function Table<TableListType extends TableListInfo>({
  maxWidth = '100%',
  headerInfo,
  tableLists,
  getBodyInfo,
}: TableProps<TableListType>) {
  return (
    <Wrapper $maxWidth={maxWidth}>
      <TableHeader headerInfo={headerInfo} />

      {tableLists.map((list, index) => {
        const bodyInfo = getBodyInfo(list, index);

        return <TableBody key={list.id} bodyInfo={bodyInfo} />;
      })}
    </Wrapper>
  );
}

export default Table;
