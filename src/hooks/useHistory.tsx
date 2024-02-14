'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { HistoryInfo, HistoryType } from '@/constants/types';

function useHistory(pathname: string): HistoryInfo {
  const [historyInfo, setHistoryInfo] = useState<HistoryInfo>({
    history: [],
    prevPathname: undefined,
    currPathname: undefined,
  });

  const saveHistory = useCallback(
    (historyStack: HistoryType, newPathname: string): HistoryInfo => {
      const newHistory = [...historyStack];

      newHistory.push(newPathname);

      return {
        history: newHistory,
        prevPathname: historyStack.at(-1),
        currPathname: newPathname,
      };
    },
    [],
  );

  const removeHistory = useCallback(
    (historyStack: HistoryType): HistoryInfo => {
      const newHistory = [...historyStack];
      const newPrev = newHistory.pop();

      return {
        history: newHistory,
        prevPathname: newPrev,
        currPathname: newHistory.at(-1),
      };
    },
    [],
  );

  const catchBack = useCallback(() => {
    // [TODO] 사용자가 뒤로가기를 했을 때 감지
    return false;
  }, []);

  const updateHistory = useCallback(
    (history: HistoryType, newPathname: string): HistoryInfo => {
      const isBack = catchBack();

      if (isBack) {
        return removeHistory(history);
      }

      return saveHistory(history, newPathname);
    },
    [],
  );

  useEffect(() => {
    const { history } = historyInfo;

    if (history.at(-1) !== pathname) {
      const newHistoryInfo = updateHistory(history, pathname);

      setHistoryInfo((curState) => ({ ...curState, ...newHistoryInfo }));
    }
  }, [pathname]);

  return historyInfo;
}

export default useHistory;
