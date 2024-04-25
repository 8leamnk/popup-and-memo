'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import useHistory from '@/hooks/useHistory';
import { handleAddHistoryInfo } from '@/slices/historySlice';

function History() {
  const { historyInfo } = useAppSelector((state) => state.history);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const updateHistory = useHistory();

  useEffect(() => {
    const { history } = historyInfo;

    if (history.first?.value !== pathname) {
      const newHistoryInfo = updateHistory(history, pathname);

      dispatch(handleAddHistoryInfo(newHistoryInfo));
    }
  }, [pathname]);

  return <></>;
}

export default React.memo(History);
