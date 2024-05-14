import React from 'react';
import { ChildrenType } from '@/constants/types';

interface FormProps extends ChildrenType {
  onSubmit: (e: React.FocusEvent<HTMLFormElement>) => void;
}

function Form({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
