import { withSession } from '@/HOC/withAuth';
import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

interface Props {
  id: string;
}

async function SelectedMemoFeature({ id }: Props) {
  const memo: MemoType = await fetchtMemo(id);

  if (memo) {
    return <SelectedMemo memo={memo} />;
  }

  return <></>;
}

export default withSession<Props>(SelectedMemoFeature);
