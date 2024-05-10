'use client';

import { act, renderHook } from '@testing-library/react';
import useComeBack from '../useComeBack';

const mockUseAppSelector = jest.fn();

jest.mock('@/provider/hooks', () => ({
  useAppSelector() {
    return mockUseAppSelector();
  },
}));

describe('useComeBack 테스트', () => {
  test('isComeback 상태값은 목표하는 페이지로 돌아올 때 true로 바뀐다.', () => {
    // given
    const TARGET_PATHNAME = '/';
    const FALSE = false;
    const TRUE = true;
    const HISTORY_FIRST = { currPathname: '/', prevPathname: undefined };
    const HISTORY_SECOND = { currPathname: '/about', prevPathname: '/' };
    const HISTORY_THIRD = { currPathname: '/my', prevPathname: '/about' };
    const HISTORY_4TH = { currPathname: '/', prevPathname: '/my' };

    // when
    mockUseAppSelector.mockImplementation(() => ({
      historyInfo: HISTORY_FIRST,
    }));
    const { result, rerender } = renderHook((props) => useComeBack(props), {
      initialProps: TARGET_PATHNAME,
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      mockUseAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_SECOND,
      }));
      rerender(TARGET_PATHNAME);
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      mockUseAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_THIRD,
      }));
      rerender(TARGET_PATHNAME);
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      mockUseAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_4TH,
      }));
      rerender(TARGET_PATHNAME);
    });

    // then
    expect(result.current).toBe(TRUE);
  });
});
