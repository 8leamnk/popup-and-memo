'use client';

import styled from 'styled-components';
import Content from '../Atoms/Content';
import Date from '../Atoms/Date';
import Title from '../Atoms/Title';
import { MemoType } from '@/constants/types';

const MemoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

interface SelectedMemoProps {
  memo: MemoType;
}

function SelectedMemo({ memo }: SelectedMemoProps) {
  return (
    <>
      <MemoInfo>
        <Title>{memo.title}</Title>
        <Content>
          {`등록일: `}
          <Date>{memo.createdAt.split('T')[0]}</Date>
        </Content>
      </MemoInfo>

      {memo.content.split(/\n/).map((text, index) => (
        <Content key={`${index}-${text}`}>
          {text}
          <br />
        </Content>
      ))}
    </>
  );
}

export default SelectedMemo;
