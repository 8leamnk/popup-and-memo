'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

// style
const Wrapper = styled.header`
  height: 56px;
  padding: 16px;
  border-bottom: 1px solid #000;

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const Page = styled.span<{ $isActive: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ $isActive }) => ($isActive ? '#12a5f8' : '#000')};
`;

// interface
interface Page {
  name: string;
  href: string;
}

// constant
const PAGES: Page[] = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'MY PAGE', href: '/my-page' },
];

function Header() {
  const pathname = usePathname();

  return (
    <Wrapper>
      <nav>
        {PAGES.map((page) => (
          <Link key={page.href} href={page.href}>
            <Page $isActive={pathname === page.href}>{page.name}</Page>
          </Link>
        ))}
      </nav>
    </Wrapper>
  );
}

export default Header;
