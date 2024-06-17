'use client';

import { useEffect, useState } from 'react';
import { withSession } from '@/HOC/withAuth';
import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

interface Props {
  id: string;
}

function SelectedMemoFeature({ id }: Props) {
  const [memo, setMemo] = useState<MemoType>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
  });

  const getMemo = async () => {
    const response = await fetchtMemo(id);

    setMemo(response);
  };

  useEffect(() => {
    getMemo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SelectedMemo memo={memo} />;
}

export default withSession<Props>(SelectedMemoFeature);
