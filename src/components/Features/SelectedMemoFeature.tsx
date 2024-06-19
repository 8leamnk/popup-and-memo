import { fetchtMemo } from '@/actions/memo.actions';
import { MemoType } from '@/constants/types';
import SelectedMemo from '../Organisms/SelectedMemo';

async function SelectedMemoFeature({ id }: { id: string }) {
  console.log('id', id);
  const memo: MemoType = await fetchtMemo(id);
  console.log('memo', memo);

  if (memo) {
    return <SelectedMemo memo={memo} />;
  }

  return <></>;
}

export default SelectedMemoFeature;
