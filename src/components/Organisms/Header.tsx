'use client';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Navigation from '../Molcules/Navigation';
import PageLink from '../Atoms/PageLink';
import LoginOrLogout from '../Molcules/LoginOrLogout';
import { PageInfo } from '@/constants/types';

// style
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => `${theme.fixedValues.headerHeight}px`};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

// constant
const PAGES: PageInfo[] = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'MY', href: '/my' },
];

function Header() {
  const { status } = useSession();

  return (
    <Wrapper>
      <Navigation>
        {PAGES.map((page) => {
          if (page.name === 'MY' && status !== 'authenticated') {
            return <></>;
          }

          return <PageLink key={page.href} pageInfo={page} />;
        })}
      </Navigation>

      <LoginOrLogout />
    </Wrapper>
  );
}

export default Header;
