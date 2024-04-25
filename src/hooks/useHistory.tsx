'use clinent';

import { useCallback } from 'react';
import { SinglyLinkedListMethods } from '@/utils/util';
import { SinglyLinkedList } from '@/constants/types';

function useHistory() {
  const saveHistory = useCallback(
    (history: SinglyLinkedList<string>, newPathname: string) => {
      const list = SinglyLinkedListMethods.push<string>(history, newPathname);

      return {
        history: list,
        prevPathname: list.first?.next?.value,
        currPathname: list.first?.value,
      };
    },
    [],
  );

  const removeHistory = useCallback((history: SinglyLinkedList<string>) => {
    const { list, removedNode } = SinglyLinkedListMethods.pop<string>(history);

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
    (history: SinglyLinkedList<string>, newPathname: string) => {
      const isBack = catchBack();

      if (isBack) {
        return removeHistory(history);
      }

      return saveHistory(history, newPathname);
    },
    [],
  );

  return { updateHistory };
}

export default useHistory;
