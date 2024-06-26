'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { handleHomeEventPopupIndex } from '@/slices/popupSlice';
import usePopup from './usePopup';
import { PopupInner, PopupServerData } from '@/constants/types';

const ERROR_MESSAGE: PopupInner = {
  title: '오류',
  content: '팝업 정보를 받아오는 중 에러가 발생했습니다.',
  popupNumber: 0,
};

function useHomeEventPopup(isComebackHome: boolean) {
  const { homeEventPopupIndex } = useAppSelector((state) => state.popup);
  const { openPopup } = usePopup();
  const dispatch = useAppDispatch();
  const [popupData, setPopupData] = useState<PopupServerData>({});
  const [isRetry, setIsretry] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await axios.get('/api/popup');

      if (data.status === 200) {
        setPopupData(data.data);
        setIsretry(false);
      } else {
        setIsretry(true);
      }
    } catch (error: unknown) {
      setIsretry(true);
    }
  };

  const retryPopup = (): void => {
    fetchData();
  };

  useEffect(() => {
    if (
      isComebackHome &&
      (homeEventPopupIndex === 0 || !!popupData[homeEventPopupIndex])
    ) {
      dispatch(handleHomeEventPopupIndex());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComebackHome]);

  useEffect(() => {
    if (isRetry) {
      openPopup(ERROR_MESSAGE);
    } else if (!!popupData[homeEventPopupIndex]) {
      openPopup(popupData[homeEventPopupIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeEventPopupIndex]);

  useEffect(() => {
    fetchData();
  }, []);

  return { isRetry, retryPopup };
}

export default useHomeEventPopup;
