'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Form from '../Molcules/Form';
import Label from '../Molcules/Label';
import Input from '../Atoms/Input';
import Textarea from '../Atoms/Textarea';
import Button from '../Atoms/Button';

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.littleBoyBlue};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 8px;
`;

const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.pinkYarrow};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

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
    <Form onSubmit={onSubmit}>
      <Label labelText="제목">
        <Input
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
          rows={10}
          cols={50}
          onChange={onChangeTextarea}
        />
      </Label>

      <PostButton onClick={onSubmit}>메모 등록하기</PostButton>

      <Link href="/my">
        <BackButton>목록으로</BackButton>
      </Link>
    </Form>
  );
}

export default CreateMemo;
