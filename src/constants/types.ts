export type HistoryType = string[];

type pathnameType = string | undefined;

export interface HistoryInfo {
  history: DoublyLinkedList;
  prevPathname: pathnameType;
  currPathname: pathnameType;
}

export interface Node {
  value: string;
  prev: Node | null;
  next: Node | null;
}

export interface DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
}

export interface PopupInner {
  title: string;
  content: string;
}

export type PopupInfo = PopupInner | null;
