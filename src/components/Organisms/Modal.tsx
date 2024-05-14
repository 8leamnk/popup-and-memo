'use client';

import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';
import ModalBack from '../Atoms/ModalBack';
import Title from '../Atoms/Title';
import Content from '../Atoms/Content';

const Inner = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 6px;
  box-shadow: 3px 6px 9px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
`;

interface NoticeModalProps extends ChildrenType {
  modalOpened: boolean;
}

function Modal({ modalOpened, children }: NoticeModalProps) {
  if (modalOpened) {
    return (
      <ModalBack>
        <Inner>
          <Title>NOTICE</Title>

          <Content>{children}</Content>
        </Inner>
      </ModalBack>
    );
  }

  return <></>;
}

export default React.memo(Modal);