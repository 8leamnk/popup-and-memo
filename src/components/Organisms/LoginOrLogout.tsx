'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styled, { css } from 'styled-components';
import Button from '../Atoms/Button';
import Profile from '../Molcules/Profile';
import { usePathname } from 'next/navigation';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  Link: styled(Link)<{ $active: boolean }>`
    ${({ $active }) =>
      $active &&
      css`
        strong {
          font-weight: bold;
          text-decoration: underline;
        }
      `}
  `,
};

const MY_PATHNAME = '/my';

function LoginOrLogout() {
  const { status } = useSession();
  const pathname = usePathname();

  if (status === 'authenticated') {
    return (
      <S.Wrapper>
        <S.Link href={MY_PATHNAME} $active={pathname.includes(MY_PATHNAME)}>
          <Profile />
        </S.Link>

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
