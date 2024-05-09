import React from 'react';
import styled from 'styled-components';

const S = {
  Label: styled.label`
    display: block;
    margin-bottom: 16px;
  `,

  LabelText: styled.h2`
    font-size: ${({ theme }) => `${theme.fontSize.base}px`};
  `,
};

function Label({
  labelText,
  children,
}: {
  labelText: string;
  children: React.ReactNode;
}) {
  return (
    <S.Label>
      <S.LabelText>{labelText}</S.LabelText>
      {children}
    </S.Label>
  );
}

export default Label;
