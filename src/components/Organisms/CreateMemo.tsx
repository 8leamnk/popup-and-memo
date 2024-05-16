'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Form from '../Molcules/Form';
import Label from '../Molcules/Label';
import Input from '../Atoms/Input';
import Textarea from '../Atoms/Textarea';
import Button from '../Atoms/Button';

const S = {
  CreateMemo: styled.section`
    width: 720px;
  `,

  PostButton: styled(Button)`
    margin-right: 8px;
  `,

  BackButton: styled(Button)`
    margin-bottom: 16px;
  `,
};

interface CreateMemoProps {
  input: string;
  textarea: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

function CreateMemo({
  input,
  textarea,
  onChangeInput,
  onChangeTextarea,
  onSubmit,
}: CreateMemoProps) {
  return (
    <S.CreateMemo>
      <Form onSubmit={onSubmit}>
        <Label labelText="제목">
          <Input
            autoFocus={true}
            value={input}
            type="text"
            placeholder="제목을 입력하세요."
            onChange={onChangeInput}
          />
        </Label>

        <Label labelText="내용">
          <Textarea
            value={textarea}
            placeholder="내용을 입력하세요."
            onChange={onChangeTextarea}
          />
        </Label>

        <S.PostButton type="submit" onClick={onSubmit}>
          메모 등록하기
        </S.PostButton>

        <Link href="/my">
          <S.BackButton type="back">목록으로</S.BackButton>
        </Link>
      </Form>
    </S.CreateMemo>
  );
}

export default CreateMemo;
