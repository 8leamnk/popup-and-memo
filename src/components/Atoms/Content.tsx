import React from 'react';
import { ChildrenType } from '@/constants/types';

interface ContentProps extends ChildrenType {}

function Content({ children, ...rest }: ContentProps) {
  return <p {...rest}>{children}</p>;
}

export default Content;
