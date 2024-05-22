'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { fetchMemoList } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import { LOADING_FEED_MEMO } from '@/constants/message';
import MemoList from '../Organisms/MemoList';

function MemoListFeature() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  const getMemoList = async () => {
    try {
      setIsLoading(true);
      const data = await fetchMemoList(session?.user?.email);
      setMemoList(data ?? []);
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

  if (isLoading) {
    return <div>{LOADING_FEED_MEMO}</div>;
  }

  return <MemoList memoList={memoList} />;
}

export default MemoListFeature;
