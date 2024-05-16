'use client';

import { useSession } from 'next-auth/react';
import { CHECK_AUTH_MESSAGE } from '@/constants/message';
import Modal from '../Organisms/Modal';

function LoginCheck() {
  const { status } = useSession();

  return <Modal modalOpened={status === 'loading'}>{CHECK_AUTH_MESSAGE}</Modal>;
}

export default LoginCheck;
