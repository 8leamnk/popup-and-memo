'use client';

import { renderHook } from '@testing-library/react';
import useComeBack from '@/hooks/useComeBack';
import { HistoryInfo, HistoryType } from '@/constants/types';

describe('목표 페이지로 돌아오는지 확인하는 기능 테스트', () => {
  interface ComeBackProps {
    historyInfo: HistoryInfo;
    targetPathname: string;
  }

  const TARGET_PATHNAME: string = '/target';
  const ANOTHER_PATHNAME: string = '/another-page';

  test.each([
    [
      {
        history: [TARGET_PATHNAME],
        prevPathname: undefined,
        currPathname: TARGET_PATHNAME,
      },
      false,
    ],
    [
      {
        history: [ANOTHER_PATHNAME],
        prevPathname: undefined,
        currPathname: ANOTHER_PATHNAME,
      },
      false,
    ],
  ])(
    '직전 경로가 없으면 무조건 false를 반환한다.',
    (historyInfo: HistoryInfo, output: boolean) => {
      // when
      const { result } = renderHook(
        (props: ComeBackProps) => useComeBack(props),
        {
          initialProps: { historyInfo, targetPathname: TARGET_PATHNAME },
        },
      );

      // then
      expect(result.current).toBe(output);
    },
  );

  test('직전 경로가 존재할 때, 현재 경로가 목표 페이지가 아닌 경우에는 false를 반환한다.', () => {
    // given
    const HISTORY: HistoryType = [
      ANOTHER_PATHNAME,
      TARGET_PATHNAME,
      ANOTHER_PATHNAME,
    ];
    const HISTORY_INFO = {
      history: HISTORY,
      prevPathname: TARGET_PATHNAME,
      currPathname: ANOTHER_PATHNAME,
    };
    const OUTPUT: boolean = false;

    // when
    const { result } = renderHook(
      (props: ComeBackProps) => useComeBack(props),
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
    const HISTORY: HistoryType = [
      TARGET_PATHNAME,
      ANOTHER_PATHNAME,
      TARGET_PATHNAME,
    ];
    const HISTORY_INFO = {
      history: HISTORY,
      prevPathname: ANOTHER_PATHNAME,
      currPathname: TARGET_PATHNAME,
    };
    const OUTPUT: boolean = true;

    // when
    const { result } = renderHook(
      (props: ComeBackProps) => useComeBack(props),
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
