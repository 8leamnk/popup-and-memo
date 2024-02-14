'use clinent';

import { useCallback, useEffect, useState } from 'react';
import { HistoryInfo, DoublyLinkedList, Node } from '@/constants/types';

interface Pop {
  list: DoublyLinkedList;
  removedNode: Node | undefined;
}

function useHistory(pathname: string): HistoryInfo {
  const [historyInfo, setHistoryInfo] = useState<HistoryInfo>({
    history: {
      head: null,
      tail: null,
      length: 0,
    },
    prevPathname: undefined,
    currPathname: undefined,
  });

  const push = useCallback(
    (historyStack: DoublyLinkedList, newPathname: string) => {
      const list: DoublyLinkedList = { ...historyStack };
      const newNode: Node = { value: newPathname, prev: null, next: null };

      if (!list.tail) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        newNode.prev = list.tail;
        list.tail.next = newNode;
        list.tail = newNode;
      }

      list.length += 1;

      return list;
    },
    [],
  );

  const pop = useCallback((historyStack: DoublyLinkedList): Pop => {
    const list: DoublyLinkedList = { ...historyStack };

    if (!list.tail) {
      return { list, removedNode: undefined };
    }

    const currentTail = list.tail;

    if (list.length === 1) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail = currentTail.prev;
      list.tail.next = null;
      currentTail.prev = null;
    }

    list.length -= 1;

    return { list, removedNode: currentTail };
  }, []);

  const saveHistory = useCallback(
    (history: DoublyLinkedList, newPathname: string): HistoryInfo => {
      const list = push(history, newPathname);

      return {
        history: list,
        prevPathname: list.tail?.prev?.value,
        currPathname: list.tail?.value,
      };
    },
    [],
  );

  const removeHistory = useCallback(
    (history: DoublyLinkedList): HistoryInfo => {
      const { list, removedNode } = pop(history);

      return {
        history: list,
        prevPathname: removedNode?.value,
        currPathname: list.tail?.value,
      };
    },
    [],
  );

  const catchBack = useCallback(() => {
    // [TODO] 사용자가 뒤로가기를 했을 때 감지
    return false;
  }, []);

  const updateHistory = useCallback(
    (history: DoublyLinkedList, newPathname: string): HistoryInfo => {
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

    if (history.tail?.value !== pathname) {
      const newHistoryInfo = updateHistory(history, pathname);

      setHistoryInfo((curState) => ({ ...curState, ...newHistoryInfo }));
    }
  }, [pathname]);

  return historyInfo;
}

export default useHistory;
