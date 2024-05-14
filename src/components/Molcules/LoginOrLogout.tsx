'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import WelcomeUser from '../Atoms/WelcomeUser';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};

function LoginOrLogout() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <S.Wrapper>
        <WelcomeUser />
        <Button length="fit" size="small" onClick={() => signOut()}>
          로그아웃
        </Button>
      </S.Wrapper>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Button length="fit" size="small" onClick={() => signIn()}>
        로그인
      </Button>
    );
  }

  return <></>;
}

export default LoginOrLogout;
