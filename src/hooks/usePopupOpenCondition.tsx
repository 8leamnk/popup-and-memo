'use client';

import { useEffect } from 'react';
import { handlePopupOpened } from '@/slices/popupSlice';
import { useAppDispatch } from '@/provider/hooks';

interface PopupOpenProps {
  openCondition: boolean;
}

function usePopupOpenCondition({ openCondition }: PopupOpenProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openCondition) {
      dispatch(handlePopupOpened(true));
    }
  }, [openCondition]);
}

export default usePopupOpenCondition;
