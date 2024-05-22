import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { fetchMemoList } from '@/actions/memo.actions';
import MemoList from '../Organisms/MemoList';

async function MemoListFeature() {
  const session = await getServerSession(authOptions);

  if (!!session) {
    const memoList = await fetchMemoList(session?.user?.email);

    return <MemoList memoList={memoList} />;
  }

  return <></>;
}

export default MemoListFeature;
