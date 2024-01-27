'use clinent';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { getPopupInfo, handlePopupOpened } from '@/slices/popupSlice';
import getPopupData from '@/constants/dummyData';
import { PopupInfo } from '@/constants/types';

const ERROR_INFO: PopupInfo = Object.freeze({
  title: '에러',
  content: '예기치 못한 오류가 발생했습니다.',
});

function usePopup() {
  const { popupState, popupInfo } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();
  const [isRetry, setIsretry] = useState<boolean>(false);

  const fetchPopupInfo = async (): Promise<void> => {
    try {
      const popupData = await getPopupData();
      dispatch(getPopupInfo(popupData));
      setIsretry(false);
    } catch (error) {
      dispatch(getPopupInfo(ERROR_INFO));
      setIsretry(true);
    }
  };

  const closePopup = (): void => {
    dispatch(handlePopupOpened(false));
    dispatch(getPopupInfo(null));
    setIsretry(false);
  };

  const retryPopup = (): void => {
    fetchPopupInfo();
  };

  useEffect(() => {
    if (popupState) {
      fetchPopupInfo();
    }
  }, [popupState]);

  return { popupInfo, isRetry, retryPopup, closePopup };
}

export default usePopup;
