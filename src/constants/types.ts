type pathnameType<T> = T | undefined;

export interface HistoryInfo<T> {
  history: SinglyLinkedList<T>;
  prevPathname: pathnameType<T>;
  currPathname: pathnameType<T>;
}

export interface SinglyNode<T> {
  value: T;
  next: SinglyNode<T> | null;
}

export interface SinglyLinkedList<T> {
  first: SinglyNode<T> | null;
  last: SinglyNode<T> | null;
  size: number;
}

export interface DoublyNode<T> {
  value: T;
  prev: DoublyNode<T> | null;
  next: DoublyNode<T> | null;
}

export interface DoublyLinkedList<T> {
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;
  length: number;
}

export interface PopupInner {
  title: string;
  content: string;
  popupNumber: number;
}

export type PopupInfo = PopupInner | null;
