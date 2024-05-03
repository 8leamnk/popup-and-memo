'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import MemoList from '@/components/Organisms/MemoList';

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blazingOrange};
  margin-top: 24px;
`;

function MyPage() {
  const { status } = useSession();

  return (
    <>
      <p>마이 페이지입니다.</p>

      {status === 'authenticated' && (
        <>
          <Link href="my/memo/create">
            <PostButton>메모 등록하기</PostButton>
          </Link>

          <MemoList />
        </>
      )}
    </>
  );
}

export default MyPage;
