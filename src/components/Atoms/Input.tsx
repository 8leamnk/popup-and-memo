import React from 'react';
import styled from 'styled-components';

const S = {
  Input: styled.input`
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    &:focus {
      outline: none;
    }
  `,
};

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(inputOptions: InputProps) {
  return <S.Input {...inputOptions} />;
}

export default Input;
