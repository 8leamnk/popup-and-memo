'use client';

import React from 'react';
import usePopup from '@/hooks/usePopup';
import styled from 'styled-components';
import Button from '../Atoms/Button';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

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

function Popup() {
  const { popupInfo, isRetry, retryPopup, closePopup } = usePopup();

  if (popupInfo) {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }

  return '';
}

export default React.memo(Popup);
