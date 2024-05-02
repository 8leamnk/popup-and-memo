'use client';

function useValidationString() {
  const validateEmpty = (input: string) => {
    if (input.length === 0) {
      throw new Error();
    }
  };

  return { validateEmpty };
}

export default useValidationString;
