import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

async function SelectedMemoFeature({ id }: { id: string }) {
  const memo: MemoType = await fetchtMemo(id);

  if (memo) {
    return <SelectedMemo memo={memo} />;
  }

  return <></>;
}

export default SelectedMemoFeature;
