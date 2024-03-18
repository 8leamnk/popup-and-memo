'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import getPopupData, { ERROR_MESSAGE } from '@/constants/dummyData';
import { PopupInner } from '@/constants/types';

function usePopup() {
  const { popupState, popupInfo } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();
  const [popupData, setPopupData] = useState(new Map());
  const [isRetry, setIsretry] = useState<boolean>(false);

  const fetchPopupData = async (): Promise<void> => {
    try {
      const data: PopupInner[] = await getPopupData();

      for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        setPopupData((curState) => curState.set(item.popupNumber, item));
      }

      setIsretry(false);
    } catch (error: unknown) {
      setIsretry(true);
    }
  };

  const closePopup = (): void => {
    dispatch(getPopupInfo(null));
    setIsretry(false);
  };

  const retryPopup = (): void => {
    fetchPopupData();
  };

  useEffect(() => {
    if (isRetry) {
      dispatch(getPopupInfo(ERROR_MESSAGE));
    } else if (popupState > 0 && popupState <= popupData.size) {
      const newPopupInfo = popupData.get(popupState);
      dispatch(getPopupInfo(newPopupInfo));
    }
  }, [popupState]);

  useEffect(() => {
    fetchPopupData();
  }, []);

  return { popupInfo, isRetry, retryPopup, closePopup };
}

export default usePopup;
