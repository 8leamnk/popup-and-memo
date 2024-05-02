'use client';

import { renderHook } from '@testing-library/react';
import useHistory from '@/hooks/useHistory';
import { SinglyLinkedList } from '@/constants/types';

describe('페이지 주소 저장 기능 테스트', () => {
  test('주소를 이동할 때마다 페이지 주소가 first로 저장되고 현재 페이지와 이전 페이지를 가져온다.', () => {
    // given
    const HISTORY: SinglyLinkedList<string> = {
      first: {
        value: '/',
        next: { value: '/about', next: { value: '/my', next: null } },
      },
      last: { value: '/my', next: null },
      size: 3,
    };
    const NEW_PATHNAME = '/my';
    const NEW_HISTORY: SinglyLinkedList<string> = {
      first: {
        value: '/my',
        next: {
          value: '/',
          next: { value: '/about', next: { value: '/my', next: null } },
        },
      },
      last: { value: '/my', next: null },
      size: 4,
    };
    const PREV_PATHNAME = '/';
    const CURR_PATHNAME = '/my';
    const OUTPUT = {
      history: NEW_HISTORY,
      prevPathname: PREV_PATHNAME,
      currPathname: CURR_PATHNAME,
    };

    // when
    const { result } = renderHook(useHistory);

    // then
    expect(result.current.updateHistory(HISTORY, NEW_PATHNAME)).toEqual(OUTPUT);
  });
});
