'use client';

import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@/provider/hooks';
import usePopup from '@/hooks/usePopup';
import useHomeEventPopup from '@/hooks/useHomeEventPopup';
import useComeBack from '@/hooks/useComeBack';
import ModalBack from '../Atoms/ModalBack';
import Title from '../Atoms/Title';
import Content from '../Atoms/Content';
import Button from '../Atoms/Button';

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
  const { closePopup } = usePopup();
  const isComebackHome = useComeBack(PATHNAME_HOME);
  const { isRetry, retryPopup } = useHomeEventPopup(isComebackHome);

  if (popupInfo) {
    return (
      <ModalBack>
        <Inner>
          <Title>{popupInfo.title}</Title>

          <Content>{popupInfo.content}</Content>

          {isRetry && (
            <Button length="long" type="submit" onClick={retryPopup}>
              {BUTTON_CONTENT.retry}
            </Button>
          )}

          <Button length="long" type="close" onClick={closePopup}>
            {BUTTON_CONTENT.close}
          </Button>
        </Inner>
      </ModalBack>
    );
  }

  return <></>;
}

export default React.memo(Popup);
