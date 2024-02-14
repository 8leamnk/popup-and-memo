export type HistoryType = string[];

type pathnameType = string | undefined;

export interface HistoryInfo {
  history: HistoryType;
  prevPathname: pathnameType;
  currPathname: pathnameType;
}

export interface PopupInner {
  title: string;
  content: string;
}

export type PopupInfo = PopupInner | null;
