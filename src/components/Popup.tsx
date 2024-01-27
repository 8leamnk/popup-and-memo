'use client';

import React from 'react';
import usePopup from '@/hooks/usePopup';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
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
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;

  h1 {
    font-size: 24px;
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 6px;
    cursor: pointer;
  }
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
            <button onClick={retryPopup}>{BUTTON_CONTENT.retry}</button>
          )}
          <button onClick={closePopup}>{BUTTON_CONTENT.close}</button>
        </Inner>
      </Wrapper>
    );
  }

  return '';
}

export default React.memo(Popup);
