'use client';

import { PopupInfo, PopupInner } from '@/constants/types';
import { renderHook } from '@testing-library/react';
import usePopup from '../usePopup';

const mockDispatch = jest.fn();
const mockGetPopupInfo = jest.fn();

jest.mock('@/provider/hooks', () => ({
  useAppDispatch() {
    return (data: PopupInfo) => mockDispatch(data);
  },
}));

jest.mock('@/slices/popupSlice', () => ({
  getPopupInfo(data: PopupInfo) {
    return mockGetPopupInfo(data);
  },
}));

describe('팝업 테스트', () => {
  test('팝업을 열기 위해서는 dispatch에 payload로 팝업 정보가 들어와야 한다.', () => {
    // given
    const POPUP_INFO: PopupInner = { title: '팝업 제목', content: '팝업 내용' };

    // when
    mockDispatch.mockImplementation((data: PopupInfo) => data);
    mockGetPopupInfo.mockImplementation((data: PopupInfo) => data);
    const { result } = renderHook(usePopup);

    result.current.openPopup(POPUP_INFO);

    // then
    expect(mockDispatch).toHaveReturnedWith(POPUP_INFO);
    expect(mockDispatch).not.toHaveReturnedWith(undefined);
    expect(mockDispatch).not.toHaveReturnedWith(null);
  });

  test('팝업을 닫기 위해서는 dispatch에 payload로 null이 들어와야 한다.', () => {
    // given
    const POPUP_INFO = null;

    // when
    mockDispatch.mockImplementation((data: null) => data);
    mockGetPopupInfo.mockImplementation((data: null) => data);
    const { result } = renderHook(usePopup);

    result.current.closePopup();

    // then
    expect(mockDispatch).toHaveReturnedWith(POPUP_INFO);
    expect(mockDispatch).not.toHaveReturnedWith(undefined);
  });
});
