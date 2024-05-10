'use client';

import { act, renderHook, waitFor } from '@testing-library/react';
import useHomeEventPopup from '../useHomeEventPopup';
import axios from 'axios';

const mockDispatch = jest.fn();
const TIMEOUT = 20;

jest.mock('@/slices/popupSlice');
jest.mock('@/provider/hooks', () => ({
  useAppSelector() {
    return { homeEventPopupIndex: 0 };
  },
  useAppDispatch() {
    return mockDispatch();
  },
}));

describe('useHomeEventPopup 테스트', () => {
  test('데이터가 성공적으로 응답되면 재시도 상태값이 false이어야 한다.', () => {
    // given
    const IS_COMEBACK_HOME = false;
    const DATA = { data: { status: 200, data: '성공' } };
    const IS_RETRY_OUTPUT = false;

    // when
    mockDispatch.mockImplementation(() => undefined);
    axios.get = jest.fn().mockResolvedValue(DATA);

    const { result } = renderHook((props) => useHomeEventPopup(props), {
      initialProps: IS_COMEBACK_HOME,
    });

    // then
    waitFor(
      () => {
        expect(result.current.isRetry).toBe(IS_RETRY_OUTPUT);
        expect(result.current.isRetry).not.toBe(!IS_RETRY_OUTPUT);
      },
      { timeout: TIMEOUT },
    );
  });

  test('데이터 응답이 실패하면 재시도 상태값이 true여야 한다.', () => {
    // given
    const IS_COMEBACK_HOME = false;
    const IS_RETRY_OUTPUT = true;

    // when
    mockDispatch.mockImplementation(() => undefined);
    axios.get = jest.fn().mockRejectedValue(new Error());

    const { result } = renderHook((props) => useHomeEventPopup(props), {
      initialProps: IS_COMEBACK_HOME,
    });

    // then
    waitFor(
      () => {
        expect(result.current.isRetry).toBe(IS_RETRY_OUTPUT);
        expect(result.current.isRetry).not.toBe(!IS_RETRY_OUTPUT);
      },
      { timeout: TIMEOUT },
    );
  });

  test('데이터 응답이 실패한 후 재시도해서 응답이 성공하면 재시도 상태값이 true에서 false로 바뀌어야 한다.', () => {
    // given
    const IS_COMEBACK_HOME = false;
    const DATA = { data: { status: 200, data: '성공' } };
    const FAIL_OUTPUT = true;
    const SUCCESS_OUTPUT = false;

    // when
    mockDispatch.mockImplementation(() => undefined);
    axios.get = jest.fn().mockRejectedValue(new Error());

    const { result } = renderHook((props) => useHomeEventPopup(props), {
      initialProps: IS_COMEBACK_HOME,
    });

    // then
    waitFor(
      () => {
        expect(result.current.isRetry).toBe(FAIL_OUTPUT);
        expect(result.current.isRetry).not.toBe(!FAIL_OUTPUT);
      },
      { timeout: TIMEOUT },
    );

    // when
    axios.get = jest.fn().mockResolvedValue(DATA);

    act(() => {
      result.current.retryPopup();
    });

    // then
    waitFor(
      () => {
        expect(result.current.isRetry).toBe(SUCCESS_OUTPUT);
        expect(result.current.isRetry).not.toBe(!SUCCESS_OUTPUT);
      },
      { timeout: TIMEOUT },
    );
  });
});
