'use client';

import { useAppDispatch } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import { PopupInner } from '@/constants/types';

function usePopup() {
  const dispatch = useAppDispatch();

  const openPopup = (params: PopupInner) => {
    dispatch(getPopupInfo({ ...params }));
  };

  const closePopup = (): void => {
    dispatch(getPopupInfo(null));
  };

  return { openPopup, closePopup };
}

export default usePopup;
