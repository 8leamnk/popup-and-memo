import styled from 'styled-components';

const S = {
  Notice: styled.p`
    color: ${({ theme }) => theme.colors.pinkYarrow};
  `,
};

function Notice({ children }: { children: string }) {
  return <S.Notice>{children}</S.Notice>;
}

export default Notice;
