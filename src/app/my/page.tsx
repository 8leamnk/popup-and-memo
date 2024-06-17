import { withSession } from '@/HOC/withAuth';
import SectionLayout from '@/components/Layouts/SectionLayout';
import LinkLayout from '@/components/Layouts/LinkLayout';
import MemoListFeature from '@/components/Features/MemoListFeatrue';
import Button from '@/components/Atoms/Button';

const S = {
  section: `
    margin-top: 24px;
  `,
  link: `
    display: inline-block;
    margin-bottom: 8px;
  `,
};

function MyPage() {
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

export default withSession(MyPage);
