'use clinent';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { getPopupInfo, handlePopupOpened } from '@/slices/popupSlice';
import popupData from '@/constants/dummyData';

function usePopup() {
  const { popupState, popupInfo } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  const fetchPopupInfo = () => {
    dispatch(getPopupInfo(popupData));
  };

  const closePopup = () => {
    dispatch(handlePopupOpened(false));
    dispatch(getPopupInfo(null));
  };

  useEffect(() => {
    if (popupState) {
      fetchPopupInfo();
    }
  }, [popupState]);

  return { popupState, popupInfo, closePopup };
}

export default usePopup;
