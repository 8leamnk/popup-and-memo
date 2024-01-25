'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { HistoryType } from '@/constants/types';

interface ComeBackProps {
  history: HistoryType;
  targetPathname: string;
}

function useComeBack({ history, targetPathname }: ComeBackProps): boolean {
  const [isComeback, setIsComeback] = useState<boolean>(false);

  const catchComeBack = useCallback((curHistory: HistoryType): boolean => {
    const [prevPathname, currPathname] = curHistory;

    return !!prevPathname && currPathname === targetPathname;
  }, []);

  useEffect(() => {
    const isComebackTargetPathname = catchComeBack(history);

    setIsComeback(isComebackTargetPathname);
  }, [history]);

  return isComeback;
}

export default useComeBack;
