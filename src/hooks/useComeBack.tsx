'use client';

import { useEffect, useState } from 'react';
import { HistoryInfo } from '@/constants/types';
import { useAppSelector } from '@/provider/hooks';

function useComeBack(targetPathname: string): boolean {
  const { historyInfo } = useAppSelector((state) => state.history);
  const [isComeback, setIsComeback] = useState<boolean>(false);

  const catchComeBack = (curHistoryInfo: HistoryInfo): boolean => {
    const { prevPathname, currPathname } = curHistoryInfo;

    return !!prevPathname && currPathname === targetPathname;
  };

  useEffect(() => {
    const isComebackTargetPathname = catchComeBack(historyInfo);

    setIsComeback(isComebackTargetPathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyInfo]);

  return isComeback;
}

export default useComeBack;
