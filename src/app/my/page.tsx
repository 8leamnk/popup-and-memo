'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@/components/Atoms/Button';
import MemoListFeature from '@/components/Features/MemoListFeatrue';

const S = {
  Memo: styled.div`
    width: 720px;
    margin-top: 24px;
  `,
  PostButton: styled(Button)`
    margin-bottom: 8px;
  `,
};

function MyPage() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <p>마이 페이지입니다.</p>

        <S.Memo>
          <Link href="my/memo/create">
            <S.PostButton type="submit">메모 등록하기</S.PostButton>
          </Link>

          <MemoListFeature />
        </S.Memo>
      </>
    );
  }

  return <></>;
}

export default MyPage;
