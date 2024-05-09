'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import MemoListTemplate from '@/components/Templates/MemoListTemplate';

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blazingOrange};
  margin: 24px 0 8px;
`;

function MyPage() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <p>마이 페이지입니다.</p>

        <Link href="my/memo/create">
          <PostButton>메모 등록하기</PostButton>
        </Link>

        <MemoListTemplate />
      </>
    );
  }

  if (status === 'unauthenticated') {
    return <p>로그인된 사용자에게만 이용이 가능합니다.</p>;
  }

  return <></>;
}

export default MyPage;
