'use client';

import React from 'react';
import useHistory from '@/hooks/useHistory';
import useComeBack from '@/hooks/useComeBack';
import usePopupOpenCondition from '@/hooks/usePopupOpenCondition';

const PATHNAME_HOME: string = '/';

function History() {
  const history = useHistory();
  const isComebackHome = useComeBack({
    history,
    targetPathname: PATHNAME_HOME,
  });

  usePopupOpenCondition(isComebackHome);

  return '';
}

export default React.memo(History);
