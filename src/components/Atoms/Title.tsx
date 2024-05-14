import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Title: styled.h1`
    font-size: ${({ theme }) => `${theme.fontSize.large}px`};
  `,
};

interface TitleProps extends ChildrenType {}

function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
}

export default Title;
