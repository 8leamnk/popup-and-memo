'use client';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { PageInfo } from '@/constants/types';
import Navigation from '../Molcules/Navigation';
import PageLink from '../Atoms/PageLink';
import LoginOrLogout from './LoginOrLogout';

// style
const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${({ theme }) => `${theme.fixedValues.headerHeight}px`};
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  `,
};

// constant
const PAGES: PageInfo[] = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
];

function Header() {
  const { status } = useSession();

  return (
    <S.Header>
      <Navigation>
        {PAGES.map((page) => (
          <PageLink key={page.href} pageInfo={page} />
        ))}
      </Navigation>

      <LoginOrLogout />
    </S.Header>
  );
}

export default Header;
