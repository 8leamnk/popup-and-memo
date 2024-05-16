'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

function SelectedMemoFeature() {
  const params = useParams();
  const { status } = useSession();
  const [memo, setMemo] = useState<MemoType | null>(null);

  const getMemo = async () => {
    try {
      const data = await fetchtMemo(params.id);
      setMemo(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('message', error.message);
      }
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      getMemo();
    }
  }, [status]);

  if (memo) {
    return <SelectedMemo memo={memo} />;
  }

  return <></>;
}

export default SelectedMemoFeature;
