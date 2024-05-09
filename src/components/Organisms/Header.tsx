'use client';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { PageInfo } from '@/constants/types';
import { CHECK_AUTH_MESSAGE } from '@/constants/message';
import Navigation from '../Molcules/Navigation';
import PageLink from '../Atoms/PageLink';
import LoginOrLogout from '../Molcules/LoginOrLogout';

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
          if (page.name === 'MY') {
            if (status === 'unauthenticated') {
              return '';
            }

            if (status === 'loading') {
              return CHECK_AUTH_MESSAGE;
            }
          }

          return <PageLink key={page.href} pageInfo={page} />;
        })}
      </Navigation>

      <LoginOrLogout />
    </Wrapper>
  );
}

export default Header;
