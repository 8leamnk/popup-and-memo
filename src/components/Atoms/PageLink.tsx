'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { PageInfo } from '@/constants/types';

const Page = styled(Link)<{ $isActive: boolean }>`
  display: block;
  font-size: ${({ theme }) => `${theme.fontSize.large}px`};
  font-weight: bold;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.black : theme.colors.white};
`;

function PageLink({ pageInfo, ...rest }: { pageInfo: PageInfo }) {
  const pathname = usePathname();

  return (
    <Page href={pageInfo.href} $isActive={pathname === pageInfo.href} {...rest}>
      {pageInfo.name}
    </Page>
  );
}

export default PageLink;
