'use client';

import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import useHomeEventPopup from '@/hooks/useHomeEventPopup';
import useComeBack from '@/hooks/useComeBack';
import Button from '../Atoms/Button';
import ModalBack from '../Atoms/ModalBack';

const Inner = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 6px;
  box-shadow: 3px 6px 9px 0 rgba(0, 0, 0, 0.16);
`;

const DecisionButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: ${({ theme }) => `2px solid ${theme.colors.quaternary}`};
`;

interface ButtonContent {
  close: string;
  retry: string;
}

const BUTTON_CONTENT: ButtonContent = {
  close: '닫기',
  retry: '재시도',
};

const PATHNAME_HOME: string = '/';

function Popup() {
  const { popupInfo } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();
  const isComebackHome = useComeBack(PATHNAME_HOME);
  const { isRetry, retryPopup } = useHomeEventPopup(isComebackHome);

  const closePopup = (): void => {
    dispatch(getPopupInfo(null));
  };

  if (popupInfo) {
    return (
      <ModalBack>
        <Inner>
          <h1>{popupInfo.title}</h1>

          <p>{popupInfo.content}</p>

          {isRetry && (
            <DecisionButton onClick={retryPopup}>
              {BUTTON_CONTENT.retry}
            </DecisionButton>
          )}

          <DecisionButton onClick={closePopup}>
            {BUTTON_CONTENT.close}
          </DecisionButton>
        </Inner>
      </ModalBack>
    );
  }

  return <></>;
}

export default React.memo(Popup);
