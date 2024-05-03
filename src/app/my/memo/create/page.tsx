'use client';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { useAppDispatch } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import useInput from '@/hooks/useInput';
import useTextarea from '@/hooks/useTextarea';
import useValidationString from '@/hooks/useValidationString';
import Form from '../../../../components/Molcules/Form';
import Label from '../../../../components/Molcules/Label';
import Input from '../../../../components/Atoms/Input';
import Textarea from '../../../../components/Atoms/Textarea';
import Button from '../../../../components/Atoms/Button';

const MemoButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.littleBoyBlue};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 8px;
`;

const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.pinkYarrow};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

function CreateMemo() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { input, onChangeInput, resetInput } = useInput();
  const { textarea, onChangeTextarea, resetTextarea } = useTextarea();
  const { validateEmpty } = useValidationString();

  const openPopup = (title: string, content: string) => {
    dispatch(getPopupInfo({ title, content }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      validateEmpty(input);
      validateEmpty(textarea);

      const response = await axios.post('/api/memo', {
        title: input,
        content: textarea.replaceAll('<br>', '\n'),
        email: session?.user?.email,
      });

      resetInput();
      resetTextarea();
      openPopup('등록 완료', response.data.message);
    } catch (error: unknown) {
      openPopup('등록 실패', '입력창을 확인해주세요.');
    }
  };

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

      <MemoButton onClick={onSubmit}>메모 등록하기</MemoButton>

      <Link href="/my">
        <BackButton>목록으로</BackButton>
      </Link>
    </Form>
  );
}

export default CreateMemo;
