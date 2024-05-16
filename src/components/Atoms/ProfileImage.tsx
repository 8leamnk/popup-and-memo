'use client';

import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const S = {
  ProfileImage: styled.div<{ $imgSource: string }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    background: ${({ $imgSource }) =>
      `no-repeat top center / 32px auto url(${$imgSource})`};
  `,
};

function ProfileImage() {
  const { data: session } = useSession();

  if (session?.user?.image) {
    return <S.ProfileImage $imgSource={session?.user?.image} />;
  }

  return <></>;
}

export default ProfileImage;
