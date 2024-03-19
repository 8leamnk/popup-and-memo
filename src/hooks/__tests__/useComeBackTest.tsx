'use client';

import { renderHook } from '@testing-library/react';
import useComeBack from '@/hooks/useComeBack';
import { HistoryInfo } from '@/constants/types';

describe('목표 페이지로 돌아오는지 확인하는 기능 테스트', () => {
  interface ComeBackProps<T> {
    historyInfo: HistoryInfo<T>;
    targetPathname: T;
  }

  const TARGET_PATHNAME: string = '/target';
  const ANOTHER_PATHNAME: string = '/another-page';

  test('직전 경로가 없으면 무조건 false를 반환한다.', () => {
    // given
    const HISTORY_INFO: HistoryInfo<string> = {
      history: { first: null, last: null, size: 0 },
      prevPathname: undefined,
      currPathname: TARGET_PATHNAME,
    };
    const OUTPUT: boolean = false;

    // when
    const { result } = renderHook(
      (props: ComeBackProps<string>) => useComeBack<string>(props),
      {
        initialProps: {
          historyInfo: HISTORY_INFO,
          targetPathname: TARGET_PATHNAME,
        },
      },
    );

    // then
    expect(result.current).toBe(OUTPUT);
  });

  test('직전 경로가 존재할 때, 현재 경로가 목표 페이지가 아닌 경우에는 false를 반환한다.', () => {
    // given
    const HISTORY_INFO: HistoryInfo<string> = {
      history: { first: null, last: null, size: 0 },
      prevPathname: TARGET_PATHNAME,
      currPathname: ANOTHER_PATHNAME,
    };
    const OUTPUT: boolean = false;

    // when
    const { result } = renderHook(
      (props: ComeBackProps<string>) => useComeBack<string>(props),
      {
        initialProps: {
          historyInfo: HISTORY_INFO,
          targetPathname: TARGET_PATHNAME,
        },
      },
    );

    // then
    expect(result.current).toBe(OUTPUT);
  });

  test('직전 경로가 존재할 때, 현재 경로가 목표 페이지일 경우에는 true를 반환한다.', () => {
    // given
    const HISTORY_INFO: HistoryInfo<string> = {
      history: { first: null, last: null, size: 0 },
      prevPathname: ANOTHER_PATHNAME,
      currPathname: TARGET_PATHNAME,
    };
    const OUTPUT: boolean = true;

    // when
    const { result } = renderHook(
      (props: ComeBackProps<string>) => useComeBack<string>(props),
      {
        initialProps: {
          historyInfo: HISTORY_INFO,
          targetPathname: TARGET_PATHNAME,
        },
      },
    );

    // then
    expect(result.current).toBe(OUTPUT);
  });
});
