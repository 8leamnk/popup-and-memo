import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import SectionLayout from '@/components/Layouts/SectionLayout';
import LinkLayout from '@/components/Layouts/LinkLayout';
import MemoListFeature from '@/components/Features/MemoListFeatrue';
import Button from '@/components/Atoms/Button';

const S = {
  section: `
    width: 720px;
    margin-top: 24px;
  `,
  link: `
    display: inline-block;
    margin-bottom: 8px;
  `,
};

async function MyPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <p>마이 페이지입니다.</p>

        <SectionLayout additionalStyles={S.section}>
          <LinkLayout href="my/memo/create" additionalStyles={S.link}>
            <Button type="submit">메모 등록하기</Button>
          </LinkLayout>

          <MemoListFeature />
        </SectionLayout>
      </>
    );
  }

  return <></>;
}

export default MyPage;
