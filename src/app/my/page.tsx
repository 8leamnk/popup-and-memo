'use client';

import styled from 'styled-components';
import { useAppDispatch } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import Button from '@/components/Atoms/Button';
import Memo from '@/components/Organisms/Memo';

const PopupButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blazingOrange};
  margin-bottom: 24px;
`;

function MyPage() {
  const dispatch = useAppDispatch();

  const openMyPagePopup = () => {
    dispatch(
      getPopupInfo({
        title: '마이 페이지',
        content: '현재 위치는 마이 페이지입니다.',
      }),
    );
  };

  return (
    <>
      <p>마이 페이지입니다.</p>

      <PopupButton onClick={openMyPagePopup}>팝업창 열기</PopupButton>

      <Memo />
    </>
  );
}

export default MyPage;
