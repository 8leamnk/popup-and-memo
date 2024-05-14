import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Button: styled.button<{ $length: string; $size: string; $type: string }>`
    display: inline-block;
    width: ${({ $length }) => {
      switch ($length) {
        case 'long':
          return '100%';
        case 'fit':
          return 'auto';
        default:
          return '120px';
      }
    }};
    height: ${({ $size }) => ($size === 'small' ? '32px' : '48px')};
    background-color: ${({ $type, theme }) => {
      switch ($type) {
        case 'primary':
          return theme.colors.primary;
        case 'submit':
          return theme.colors.littleBoyBlue;
        case 'back':
          return theme.colors.pinkYarrow;
        case 'close':
          return theme.colors.pristine;
        default:
          return theme.colors.honeyPeach;
      }
    }};
    color: ${({ $type, theme }) => {
      switch ($type) {
        case 'submit':
        case 'back':
          return theme.colors.white;
        default:
          return theme.colors.black;
      }
    }};
    padding: 0 8px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &:active {
      transform: translateX(1px) translateY(1px);
    }
  `,
};

interface ButtonProps extends ChildrenType {
  length?: 'normal' | 'long' | 'fit';
  size?: 'normal' | 'small';
  type?: 'normal' | 'primary' | 'submit' | 'back' | 'close';
  onClick?: (() => void) | ((e: React.FormEvent) => Promise<void>);
}

function Button({
  children,
  length = 'normal',
  size = 'normal',
  type = 'normal',
  ...rest
}: ButtonProps) {
  return (
    <S.Button $length={length} $size={size} $type={type} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
