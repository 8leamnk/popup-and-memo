'use client';

import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Section: styled.section<{ $additionalStyles: string }>`
    ${({ $additionalStyles }) => $additionalStyles};
  `,
};

interface SectionLayoutProps extends ChildrenType {
  additionalStyles: string;
}

function SectionLayout({ additionalStyles, children }: SectionLayoutProps) {
  return <S.Section $additionalStyles={additionalStyles}>{children}</S.Section>;
}

export default SectionLayout;
