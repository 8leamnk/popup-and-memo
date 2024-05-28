import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

async function SelectedMemoFeature({ id }: { id: string }) {
  const session = await getServerSession(authOptions);
  const memo: MemoType = await fetchtMemo(id);

  if (session && memo) {
    return <SelectedMemo memo={memo} />;
  }

  return <></>;
}

export default SelectedMemoFeature;
