'use client';

import React, { useState } from 'react';

function useInput() {
  const [input, setInput] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const resetInput = () => {
    setInput('');
  };

  return { input, onChangeInput, resetInput };
}

export default useInput;
