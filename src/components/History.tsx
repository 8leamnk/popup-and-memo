'use client';

import React from 'react';
import useHistory from '@/hooks/useHistory';
import useComeBack from '@/hooks/useComeBack';

const PATHNAME_HOME: string = '/';

function History() {
  const history = useHistory();
  const isComebackHome = useComeBack({
    history,
    targetPathname: PATHNAME_HOME,
  });

  return '';
}

export default React.memo(History);
