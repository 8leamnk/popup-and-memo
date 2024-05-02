import React from 'react';

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(inputOptions: InputProps) {
  return <input {...inputOptions} />;
}

export default Input;
