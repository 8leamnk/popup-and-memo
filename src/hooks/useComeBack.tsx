'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { HistoryInfo } from '@/constants/types';

interface ComeBackProps<T> {
  historyInfo: HistoryInfo<T>;
  targetPathname: T;
}

function useComeBack<T>({
  historyInfo,
  targetPathname,
}: ComeBackProps<T>): boolean {
  const [isComeback, setIsComeback] = useState<boolean>(false);

  const catchComeBack = useCallback(
    (curHistoryInfo: HistoryInfo<T>): boolean => {
      const { prevPathname, currPathname } = curHistoryInfo;

      return !!prevPathname && currPathname === targetPathname;
    },
    [],
  );

  useEffect(() => {
    const isComebackTargetPathname = catchComeBack(historyInfo);

    setIsComeback(isComebackTargetPathname);
  }, [historyInfo]);

  return isComeback;
}

export default useComeBack;
