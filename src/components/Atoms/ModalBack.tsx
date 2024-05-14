import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';
import React from 'react';

const Wrapper = styled.section<{ $theme: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $theme }) => {
    switch ($theme) {
      case 'light':
        return `rgba(255, 255, 255, 0.6)`;
      default:
        return `rgba(0, 0, 0, 0.4)`;
    }
  }};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

interface ModalBackProps extends ChildrenType {
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

function ModalBack({ theme = 'dark', children, onClick }: ModalBackProps) {
  const onClickBack = (e: React.MouseEvent) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  return (
    <Wrapper $theme={theme} onClick={onClickBack}>
      {children}
    </Wrapper>
  );
}

export default ModalBack;
