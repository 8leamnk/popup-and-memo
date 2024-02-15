import { SinglyLinkedList, SinglyNode } from '@/constants/types';

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
