import { DataType, SinglyLinkedList, SinglyNode } from '@/constants/types';

interface SinglyPop<T> {
  list: SinglyLinkedList<T>;
  removedNode: SinglyNode<T> | undefined;
}

export const SinglyLinkedListMethods = {
  push<T>(stack: SinglyLinkedList<T>, value: T): SinglyLinkedList<T> {
    const list: SinglyLinkedList<T> = { ...stack };
    const newNode: SinglyNode<T> = { value, next: null };

    if (!list.first) {
      list.first = newNode;
      list.last = newNode;
    } else {
      newNode.next = list.first;
      list.first = newNode;
    }

    list.size += 1;

    return list;
  },

  pop<T>(stack: SinglyLinkedList<T>): SinglyPop<T> {
    const list: SinglyLinkedList<T> = { ...stack };

    if (!list.first) {
      return { list, removedNode: undefined };
    }

    const removedNode = list.first;

    if (list.first === list.last) {
      list.last = null;
    }

    list.first = removedNode.next;
    list.size -= 1;

    return { list, removedNode };
  },
};

export const convertBigIntToNumber = <T>(data: T) => {
  const updatedData = JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value,
  );

  return updatedData;
};

export function bubbleSort<T extends DataType>(arr: T[]) {
  const result = [...arr];

  for (let i = result.length; i > 0; i -= 1) {
    let noSwap = true;

    for (let j = 0; j < i - 1; j += 1) {
      if (result[j].id > result[j + 1].id) {
        [result[j + 1], result[j]] = [result[j], result[j + 1]];
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return result;
}
