'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import MemoListFeature from '@/components/Features/MemoListFeatrue';

const PostButton = styled(Button)`
  margin: 24px 0 8px;
`;

function MyPage() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <p>마이 페이지입니다.</p>

        <Link href="my/memo/create">
          <PostButton type="submit">메모 등록하기</PostButton>
        </Link>

        <MemoListFeature />
      </>
    );
  }

  return <></>;
}

export default MyPage;
