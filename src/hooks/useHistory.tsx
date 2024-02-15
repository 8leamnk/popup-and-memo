'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { SinglyLinkedListMethods } from '@/utils/util';
import { HistoryInfo, SinglyLinkedList } from '@/constants/types';

function useHistory<T>(pathname: T): HistoryInfo<T> {
  const [historyInfo, setHistoryInfo] = useState<HistoryInfo<T>>({
    history: { first: null, last: null, size: 0 },
    prevPathname: undefined,
    currPathname: undefined,
  });

  const saveHistory = useCallback(
    (history: SinglyLinkedList<T>, newPathname: T) => {
      const list = SinglyLinkedListMethods.push<T>(history, newPathname);

      return {
        history: list,
        prevPathname: list.first?.next?.value,
        currPathname: list.first?.value,
      };
    },
    [],
  );

  const removeHistory = useCallback((history: SinglyLinkedList<T>) => {
    const { list, removedNode } = SinglyLinkedListMethods.pop<T>(history);

    return {
      history: list,
      prevPathname: removedNode?.value,
      currPathname: list.first?.value,
    };
  }, []);

  const catchBack = useCallback(() => {
    // [TODO] 사용자가 뒤로가기를 했을 때 감지
    return false;
  }, []);

  const updateHistory = useCallback(
    (history: SinglyLinkedList<T>, newPathname: T) => {
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

    if (history.first?.value !== pathname) {
      const newHistoryInfo = updateHistory(history, pathname);

      setHistoryInfo({ ...historyInfo, ...newHistoryInfo });
    }
  }, [pathname]);

  return historyInfo;
}

export default useHistory;
