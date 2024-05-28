import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { PrismaClient } from '@prisma/client';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

const prisma = new PrismaClient();

async function SelectedMemoFeature({ id }: { id: string }) {
  try {
    const session = await getServerSession(authOptions);
    const response = await prisma.memo.findUnique({
      where: { id: Number(id) },
    });

    const memo: MemoType = {
      id: Number(response?.id),
      createdAt: response?.createdAt?.toLocaleString() || '',
      title: response?.title || '',
      content: response?.content || '',
    };

    if (session) {
      return <SelectedMemo memo={memo} />;
    }

    throw new Error('세션 정보가 없습니다.');
  } catch (error) {
    if (error instanceof Error) {
      return <>{error.message}</>;
    }

    return <>불러오는 데 오류가 발생했습니다.</>;
  }
}

export default SelectedMemoFeature;
