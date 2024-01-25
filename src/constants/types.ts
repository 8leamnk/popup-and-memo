export type HistoryType = string[];

export interface PopupInner {
  title: string;
  content: string;
}

export type PopupInfo = PopupInner | null;
