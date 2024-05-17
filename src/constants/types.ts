import React from 'react';

declare module 'next-auth' {
  interface Response {
    name: string;
  }

  interface Profile {
    response: Response;
  }
}

export interface DataType {
  id: number;
}

type pathnameType = string | undefined;

export interface HistoryInfo {
  history: SinglyLinkedList<string>;
  prevPathname: pathnameType;
  currPathname: pathnameType;
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
  popupNumber?: number;
}

export interface PopupServerData {
  [key: number]: PopupInner;
}

export type PopupInfo = PopupInner | null;

export interface PageInfo {
  name: string;
  href: string;
}

export interface MemoType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface PostMemoParams {
  input: string;
  textarea: string;
  email: string;
}

export interface TableListInfo {
  id: number;
  title: string;
  createdAt?: string;
}

export interface TableHeaderInfo {
  id: number;
  children: React.ReactNode;
  width: string;
  flex: string;
}

export interface TableBodyInfo {
  id: number;
  children: React.ReactNode;
  width: string;
  flex: string;
  description: string;
  fontWeight: string;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export type ModalTheme = 'light' | 'dark';
