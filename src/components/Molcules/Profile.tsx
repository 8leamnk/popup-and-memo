import styled from 'styled-components';
import ProfileImage from '../Atoms/ProfileImage';
import ProfileName from '../Atoms/ProfileName';

const S = {
  Profile: styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};

function Profile() {
  return (
    <S.Profile>
      <ProfileImage />
      <ProfileName />
    </S.Profile>
  );
}

export default Profile;
