import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { postMemo } from '@/actions/memo.actions';
import CreateMemo from '@/components/Organisms/CreateMemo';

async function CreateMemoFeature() {
  const session = await getServerSession(authOptions);

  const createMemo = async (
    input: string,
    textarea: string,
  ): Promise<string> => {
    'use server';
    const message = await postMemo(input, textarea, session?.user?.email);

    return message;
  };

  return <CreateMemo createMemo={createMemo} />;
}

export default CreateMemoFeature;
