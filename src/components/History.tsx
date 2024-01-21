'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type ArrayState = string[];
const PATHNAME_HOME: string = '/';

function History() {
  const [history, setHistory] = useState<ArrayState>([]);
  const pathname = usePathname();

  const saveHistory = useCallback(
    (curHistory: ArrayState, newPathname: string): ArrayState => {
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

  const catchComebackHome = useCallback((curHistory: ArrayState): boolean => {
    const [prevPathname, currPathname] = curHistory;

    return !!prevPathname && currPathname === PATHNAME_HOME;
  }, []);

  useEffect(() => {
    const newHistory = saveHistory(history, pathname);

    setHistory(newHistory);
  }, [pathname]);

  useEffect(() => {
    const isComebackHome = catchComebackHome(history);

    if (isComebackHome) {
      window.alert('홈으로 돌아왔다!');
    }
  }, [history]);

  return '';
}

export default History;
