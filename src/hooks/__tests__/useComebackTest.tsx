'use client';

import { act, renderHook } from '@testing-library/react';
import ReduxProvider from '@/provider/ReduxProvider';
import useComeBack from '../useComeBack';

const useAppSelector = jest.fn();

describe('useComeBack 테스트', () => {
  test('isComeback 상태값은 목표하는 페이지로 돌아올 때 true로 바뀐다.', () => {
    // given
    const TARGET_PATHNAME = '/';
    const FALSE = false;
    const TRUE = true;
    const HISTORY_FIRST = {
      currPathname: undefined,
      history: {},
      prevPathname: undefined,
    };
    const HISTORY_SECOND = {
      currPathname: '/',
      prevPathname: undefined,
    };
    const HISTORY_THIRD = {
      currPathname: '/about',
      prevPathname: '/',
    };
    const HISTORY_4TH = {
      currPathname: '/my',
      prevPathname: '/about',
    };
    const HISTORY_5TH = {
      currPathname: '/',
      prevPathname: '/my',
    };

    // when
    const { result, rerender } = renderHook((props) => useComeBack(props), {
      initialProps: TARGET_PATHNAME,
      wrapper: ({ children }) => <ReduxProvider>{children}</ReduxProvider>,
    });

    act(() => {
      useAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_FIRST,
      }));
      rerender();
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      useAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_SECOND,
      }));
      rerender();
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      useAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_THIRD,
      }));
      rerender();
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      useAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_4TH,
      }));
      rerender();
    });

    // then
    expect(result.current).toBe(FALSE);

    // when
    act(() => {
      useAppSelector.mockImplementation(() => ({
        historyInfo: HISTORY_5TH,
      }));
      rerender();
    });

    // then
    expect(result.current).toBe(TRUE);
  });
});
