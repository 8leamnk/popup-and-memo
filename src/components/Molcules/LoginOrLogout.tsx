'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';
import { CHECK_AUTH_MESSAGE } from '@/constants/message';
import Button from '../Atoms/Button';
import WelcomeUser from '../Atoms/WelcomeUser';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Button: styled(Button)`
    background-color: ${({ theme }) => theme.colors.honeyPeach};
  `,
};

function LoginOrLogout() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <S.Wrapper>
        <WelcomeUser />
        <S.Button size="small" onClick={() => signOut()}>
          로그아웃
        </S.Button>
      </S.Wrapper>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <S.Button size="small" onClick={() => signIn()}>
        로그인
      </S.Button>
    );
  }

  return <>{CHECK_AUTH_MESSAGE}</>;
}

export default LoginOrLogout;
