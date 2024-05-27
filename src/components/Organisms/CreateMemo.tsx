'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '@/hooks/useInput';
import useTextarea from '@/hooks/useTextarea';
import useValidationString from '@/hooks/useValidationString';
import usePopup from '@/hooks/usePopup';
import Form from '../Molcules/Form';
import Label from '../Molcules/Label';
import Input from '../Atoms/Input';
import Textarea from '../Atoms/Textarea';
import Button from '../Atoms/Button';

const S = {
  CreateMemo: styled.section`
    width: 720px;
  `,

  Decision: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `,
};

interface CreateMemoProps {
  createMemo: (input: string, textarea: string) => Promise<string>;
}

function CreateMemo({ createMemo }: CreateMemoProps) {
  const { input, onChangeInput, resetInput } = useInput();
  const { textarea, onChangeTextarea, resetTextarea } = useTextarea();
  const { validateEmpty } = useValidationString();
  const { openPopup } = usePopup();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      validateEmpty([input, textarea]);
      const message = await createMemo(input, textarea);
      resetInput();
      resetTextarea();
      openPopup({ title: '등록 완료', content: message });
    } catch (error: unknown) {
      const content =
        '비어 있는 입력창이 있거나 사용자 정보에 이메일이 없어서 등록을 하지 못했습니다.';
      openPopup({ title: '등록 실패', content });
    }
  };

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

        <S.Decision>
          <Button type="submit" onClick={onSubmit}>
            메모 등록하기
          </Button>

          <Link href="/my">
            <Button type="back">목록으로</Button>
          </Link>
        </S.Decision>
      </Form>
    </S.CreateMemo>
  );
}

export default CreateMemo;
