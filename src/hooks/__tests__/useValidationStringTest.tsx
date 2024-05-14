import { renderHook } from '@testing-library/react';
import useValidationString from '../useValidationString';

describe('문자열 유효성 검사', () => {
  test('빈 문자열이 있으면 예외가 발생한다.', () => {
    // given
    const INPUTS = ['검사 중', '룰루', ''];

    // when
    const { result } = renderHook(useValidationString);

    // then
    expect(() => {
      result.current.validateEmpty(INPUTS);
    }).toThrow();
  });

  test('빈 문자열이 없으면 예외가 발생하지 않는다.', () => {
    // given
    const INPUTS = ['메모 내용', '가나다라', '안녕하세요', '제목'];

    // when
    const { result } = renderHook(useValidationString);

    // then
    expect(() => {
      result.current.validateEmpty(INPUTS);
    }).not.toThrow();
  });
});
