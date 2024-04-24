'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import { PopupInner } from '@/constants/types';

const ERROR_MESSAGE: PopupInner = {
  title: '오류',
  content: '팝업 정보를 받아오는 중 에러가 발생했습니다.',
  popupNumber: 0,
};

function usePopup() {
  const { popupState, popupInfo } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();
  const [popupData, setPopupData] = useState(new Map());
  const [isRetry, setIsretry] = useState<boolean>(false);

  const changeDataStructure = (data: PopupInner[]) => {
    const changedData = new Map();

    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      changedData.set(item.popupNumber, item);
    }

    return changedData;
  };

  const fetchPopupData = async (): Promise<void> => {
    try {
      const response = await fetch('/api/popup');
      const result = await response.json();

      if (result.status === 200) {
        setPopupData(changeDataStructure(result.data));
        setIsretry(false);
      } else {
        setIsretry(true);
      }
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
