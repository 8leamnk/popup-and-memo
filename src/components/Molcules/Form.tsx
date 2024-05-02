import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FocusEvent<HTMLFormElement>) => void;
}

function Form({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
