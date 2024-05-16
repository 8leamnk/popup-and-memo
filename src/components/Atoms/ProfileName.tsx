'use client';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const S = {
  ProfileName: styled.strong`
    font-weight: normal;
  `,
};

function ProfileName() {
  const { data: session } = useSession();

  return <S.ProfileName>{`${session?.user?.name}님`}</S.ProfileName>;
}

export default ProfileName;
