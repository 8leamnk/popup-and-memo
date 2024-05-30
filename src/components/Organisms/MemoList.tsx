'use client';

import Link from 'next/link';
import { MemoType } from '@/constants/types';
import Table from './Table';

interface MemoListProps {
  memoList: MemoType[];
}

function MemoList({ memoList }: MemoListProps) {
  const headerInfo = [
    { id: 1, children: '번호', width: '80px', flex: 'none' },
    { id: 2, children: '제목', width: '100%', flex: '1' },
    { id: 3, children: '등록된 날짜', width: '120px', flex: 'none' },
  ];

  const getBodyInfo = (memo: MemoType, index: number) => {
    return [
      {
        id: 1,
        children: index + 1,
        width: headerInfo[0].width,
        flex: headerInfo[0].flex,
        description: '번호',
        fontWeight: 'normal',
      },
      {
        id: 2,
        children: <Link href={`my/memo/${memo.id}`}>{memo.title}</Link>,
        width: headerInfo[1].width,
        flex: headerInfo[1].flex,
        description: '제목',
        fontWeight: 'bold',
      },
      {
        id: 3,
        children: memo.createdAt.split('T')[0],
        width: headerInfo[2].width,
        flex: headerInfo[2].flex,
        description: '등록된 날짜',
        fontWeight: 'normal',
      },
    ];
  };

  if (memoList.length > 0) {
    return (
      <Table
        maxWidth="720px"
        tableLists={memoList}
        headerInfo={headerInfo}
        getBodyInfo={getBodyInfo}
      />
    );
  }

  return <></>;
}

export default MemoList;
