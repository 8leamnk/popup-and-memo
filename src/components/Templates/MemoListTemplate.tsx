'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { MemoType } from '@/constants/types';
import MemoList from '../Organisms/MemoList';

function MemoListTemplate() {
  const { data: session } = useSession();
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  const getMemo = async () => {
    try {
      const response = await axios.get(
        `/api/memo?email=${session?.user?.email}&isUnique=0`,
      );

      setMemoList(response.data.data);
    } catch (error: unknown) {
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getMemo();
  }, []);

  return <MemoList memoList={memoList} />;
}

export default MemoListTemplate;
