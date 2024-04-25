'use client';

import Button from '@/components/Atoms/Button';
import { useAppDispatch } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';

function MyPage() {
  const dispatch = useAppDispatch();

  const onClick = () => {
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

      <Button onClick={onClick}>팝업창 열기</Button>
    </>
  );
}

export default MyPage;
