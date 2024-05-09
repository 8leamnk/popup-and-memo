'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { MemoType } from '@/constants/types';
import { LOADING_FEED_MEMO } from '@/constants/message';
import MemoList from '../Organisms/MemoList';

function MemoListTemplate() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  const getMemo = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `/api/memo?email=${session?.user?.email}&isUnique=0`,
      );

      setMemoList(response.data.data);
      setIsLoading(false);
    } catch (error: unknown) {
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getMemo();
  }, []);

  if (isLoading) {
    return <div>{LOADING_FEED_MEMO}</div>;
  }

  return <MemoList memoList={memoList} />;
}

export default MemoListTemplate;
