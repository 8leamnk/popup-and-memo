'use client';

import styled from 'styled-components';
import Navigation from '../Molcules/Navigation';
import PageLink from '../Atoms/PageLink';
import { PageInfo } from '@/constants/types';

// style
const Wrapper = styled.header`
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
  return (
    <Wrapper>
      <Navigation>
        {PAGES.map((page) => (
          <PageLink key={page.href} pageInfo={page} />
        ))}
      </Navigation>
    </Wrapper>
  );
}

export default Header;
