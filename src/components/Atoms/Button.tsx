import styled from 'styled-components';

const S = {
  Button: styled.button<{ $type: string; $size: string }>`
    height: ${({ $size }) => ($size === 'small' ? '32px' : '48px')};
    padding: 0 8px;
    border-radius: 6px;
    outline: none;
    background-color: ${({ $type, theme }) => {
      switch ($type) {
        case 'primary':
          return theme.colors.primary;
        default:
          return theme.colors.white;
      }
    }};
    cursor: pointer;

    &:active {
      transform: translateX(1px) translateY(1px);
    }
  `,
};

interface ButtonProps {
  size?: string;
  type?: string;
  children: string;
  onClick?: (() => void) | ((e: React.FormEvent) => Promise<void>);
}

function Button({
  children,
  type = 'normal',
  size = 'normal',
  ...rest
}: ButtonProps) {
  return (
    <S.Button $type={type} $size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
