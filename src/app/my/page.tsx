// 'use client';

import Link from 'next/link';
// import styled from 'styled-components';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import Button from '@/components/Atoms/Button';
import MemoListFeature from '@/components/Features/MemoListFeatrue';

// const S = {
//   Memo: styled.div`
//     width: 720px;
//     margin-top: 24px;
//   `,
//   PostButton: styled(Button)`
//     margin-bottom: 8px;
//   `,
// };

async function MyPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <p>마이 페이지입니다.</p>

        <Link href="my/memo/create">
          <Button type="submit">메모 등록하기</Button>
        </Link>

        <MemoListFeature />
      </>
    );
  }

  return <></>;
}

export default MyPage;
