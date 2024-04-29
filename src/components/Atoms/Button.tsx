import styled from 'styled-components';

const S = {
  Button: styled.button`
    height: 48px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &:active {
      transform: translateX(1px) translateY(1px);
    }
  `,
};

interface ButtonProps {
  children: string;
  onClick: (() => void) | ((e: React.FormEvent) => Promise<void>);
}

function Button({ children, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}

export default Button;
