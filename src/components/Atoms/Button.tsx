import styled from 'styled-components';

const S = {
  Button: styled.button<{ $isPrimary: boolean }>`
    height: 48px;
    border-radius: 6px;
    outline: none;
    background-color: ${({ $isPrimary, theme }) =>
      $isPrimary ? theme.colors.primary : theme.colors.white};
    cursor: pointer;

    &:active {
      transform: translateX(1px) translateY(1px);
    }
  `,
};

interface ButtonProps {
  isPrimary: boolean;
  children: string;
  onClick?: (() => void) | ((e: React.FormEvent) => Promise<void>);
}

function Button({ isPrimary, children, ...rest }: ButtonProps) {
  return (
    <S.Button $isPrimary={isPrimary} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
