'use client';

import { useEffect } from 'react';
import { handlePopupOpened } from '@/slices/popupSlice';
import { useAppDispatch } from '@/provider/hooks';

function usePopupOpenCondition(openCondition: boolean) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openCondition) {
      dispatch(handlePopupOpened());
    }
  }, [openCondition]);
}

export default usePopupOpenCondition;
