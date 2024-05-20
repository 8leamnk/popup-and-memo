'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { fetchMemoList } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import { LOADING_FEED_MEMO } from '@/constants/message';
import Table from '../Organisms/Table';

function MemoListFeature() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  const getMemoList = async () => {
    try {
      setIsLoading(true);
      const data = await fetchMemoList(session?.user?.email);
      setMemoList(data);
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('message', error.message);
      }
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      getMemoList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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

  if (isLoading) {
    return <div>{LOADING_FEED_MEMO}</div>;
  }

  if (memoList.length > 0) {
    return (
      <Table
        headerInfo={headerInfo}
        tableLists={memoList}
        getBodyInfo={getBodyInfo}
      />
    );
  }

  return <></>;
}

export default MemoListFeature;
