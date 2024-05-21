'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Link: styled(Link)<{ $additionalStyles: string }>`
    ${({ $additionalStyles }) => $additionalStyles};
  `,
};

interface LinkLayoutProps extends ChildrenType {
  href: string;
  additionalStyles: string;
}

function LinkLayout({ href, additionalStyles, children }: LinkLayoutProps) {
  return (
    <S.Link href={href} $additionalStyles={additionalStyles}>
      {children}
    </S.Link>
  );
}

export default LinkLayout;
