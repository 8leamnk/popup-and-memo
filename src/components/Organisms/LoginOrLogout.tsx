'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import Profile from '../Molcules/Profile';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
};

function LoginOrLogout() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <S.Wrapper>
        <Profile />
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
