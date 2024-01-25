'use clinent';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { HistoryType } from '@/constants/types';

function useHistory(): HistoryType {
  const [history, setHistory] = useState<HistoryType>([]);
  const pathname = usePathname();

  const saveHistory = useCallback(
    (curHistory: HistoryType, newPathname: string): HistoryType => {
      const newHistory = [...curHistory];

      if (newHistory.at(-1) !== newPathname) {
        newHistory.push(newPathname);
      }

      if (newHistory.length > 2) {
        newHistory.shift();
      }

      return newHistory;
    },
    [],
  );

  useEffect(() => {
    const newHistory = saveHistory(history, pathname);

    setHistory(newHistory);
  }, [pathname]);

  return history;
}

export default useHistory;
