'use client';

function useValidationString() {
  const validateEmpty = (inputs: string[]) => {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].length === 0) {
        throw new Error();
      }
    }
  };

  return { validateEmpty };
}

export default useValidationString;
