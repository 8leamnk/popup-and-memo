import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export function withSession<P extends object>(
  Component: React.ComponentType<P>,
) {
  return async function Session(props: P) {
    const session = await getServerSession(authOptions);

    if (session) {
      return <Component {...props} />;
    }

    return <></>;
  };
}
