import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Label: styled.label`
    display: block;
    margin-bottom: 16px;
  `,

  LabelText: styled.h2`
    font-size: ${({ theme }) => `${theme.fontSize.base}px`};
  `,
};

interface LabelProps extends ChildrenType {
  labelText: string;
}

function Label({ labelText, children }: LabelProps) {
  return (
    <S.Label>
      <S.LabelText>{labelText}</S.LabelText>
      {children}
    </S.Label>
  );
}

export default Label;
