'use client';

import { useEffect } from 'react';
import { handlePopupOpened } from '@/slices/popupSlice';
import { useAppDispatch } from '@/provider/hooks';

function usePopupOpenCondition(openCondition: boolean) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openCondition) {
      dispatch(handlePopupOpened(true));
    }
  }, [openCondition]);
}

export default usePopupOpenCondition;
