'use client';

import { useSession } from 'next-auth/react';

function WelcomeUser() {
  const { data: session } = useSession();

  return <p>{`${session?.user?.name}님 안녕하세요`}</p>;
}

export default WelcomeUser;
