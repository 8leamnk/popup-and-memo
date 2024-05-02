'use client';

import React, { useState } from 'react';

function useTextarea() {
  const [textarea, setTextarea] = useState('');

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const resetTextarea = () => {
    setTextarea('');
  };

  return { textarea, onChangeTextarea, resetTextarea };
}

export default useTextarea;
