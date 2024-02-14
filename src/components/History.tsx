'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import useHistory from '@/hooks/useHistory';
import useComeBack from '@/hooks/useComeBack';
import usePopupOpenCondition from '@/hooks/usePopupOpenCondition';

const PATHNAME_HOME: string = '/';

function History() {
  const pathname = usePathname();
  const historyInfo = useHistory(pathname);
  const isComebackHome = useComeBack({
    historyInfo,
    targetPathname: PATHNAME_HOME,
  });

  usePopupOpenCondition(isComebackHome);

  return '';
}

export default React.memo(History);
