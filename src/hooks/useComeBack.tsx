'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { HistoryInfo } from '@/constants/types';

interface ComeBackProps {
  historyInfo: HistoryInfo;
  targetPathname: string;
}

function useComeBack({ historyInfo, targetPathname }: ComeBackProps): boolean {
  const [isComeback, setIsComeback] = useState<boolean>(false);

  const catchComeBack = useCallback((curHistoryInfo: HistoryInfo): boolean => {
    const { prevPathname, currPathname } = curHistoryInfo;

    return !!prevPathname && currPathname === targetPathname;
  }, []);

  useEffect(() => {
    const isComebackTargetPathname = catchComeBack(historyInfo);

    setIsComeback(isComebackTargetPathname);
  }, [historyInfo]);

  return isComeback;
}

export default useComeBack;
