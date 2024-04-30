'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { MemoType } from '@/constants/types';

function Memo() {
  const params = useParams();
  const [memo, setMemo] = useState<MemoType>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
  });

  const getMemo = async () => {
    try {
      const response = await axios.get(`/api/memo/?id=${params.id}&isUnique=1`);

      setMemo(response.data.data);
    } catch (error: unknown) {
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getMemo();
  }, []);

  if (memo.id > 0) {
    return (
      <>
        <h1>{memo.title}</h1>
        <time>{memo.createdAt.split('T')[0]}</time>
        <p>{memo.content}</p>
      </>
    );
  }

  return <></>;
}

export default Memo;
