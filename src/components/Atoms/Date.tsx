import styled from 'styled-components';
import { ChildrenType } from '@/constants/types';

const S = {
  Date: styled.time`
    color: ${({ theme }) => theme.colors.primary};
  `,
};

interface DateProps extends ChildrenType {}

function Date({ children }: DateProps) {
  return <S.Date>{children}</S.Date>;
}

export default Date;
