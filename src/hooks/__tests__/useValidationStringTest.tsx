import { renderHook } from '@testing-library/react';
import useValidationString from '../useValidationString';

describe('문자열 유효성 검사', () => {
  test('아무 것도 입력하지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = '';

    // when
    const { result } = renderHook(useValidationString);

    // then
    expect(() => {
      result.current.validateEmpty(INPUT);
    }).toThrow();
  });

  test('문자열의 길이가 1 이상이면 예외가 발생하지 않는다.', () => {
    // given
    const INPUT = '메모';

    // when
    const { result } = renderHook(useValidationString);

    // then
    expect(() => {
      result.current.validateEmpty(INPUT);
    }).not.toThrow();
  });
});
