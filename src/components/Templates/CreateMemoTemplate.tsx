'use client';

import React from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/provider/hooks';
import { getPopupInfo } from '@/slices/popupSlice';
import useInput from '@/hooks/useInput';
import useTextarea from '@/hooks/useTextarea';
import useValidationString from '@/hooks/useValidationString';
import CreateMemo from '@/components/Organisms/CreateMemo';

function CreateMemoTemplate() {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const { input, onChangeInput, resetInput } = useInput();
  const { textarea, onChangeTextarea, resetTextarea } = useTextarea();
  const { validateEmpty } = useValidationString();

  const validateInputs = () => {
    validateEmpty(input);
    validateEmpty(textarea);
  };

  const postMemo = async () => {
    const response = await axios.post('/api/memo', {
      title: input,
      content: textarea.replaceAll('<br>', '\n'),
      email: session?.user?.email,
    });

    return response;
  };

  const openPopup = (title: string, content: string) => {
    dispatch(getPopupInfo({ title, content }));
  };

  const successPostingMemo = (message: string) => {
    resetInput();
    resetTextarea();
    openPopup('등록 완료', message);
  };

  const failPostingMemo = () => {
    openPopup('등록 실패', '입력창을 확인해주세요.');
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      validateInputs();
      const response = await postMemo();
      successPostingMemo(response.data.message);
    } catch (error: unknown) {
      failPostingMemo();
    }
  };

  return (
    <CreateMemo
      input={input}
      textarea={textarea}
      onChangeInput={onChangeInput}
      onChangeTextarea={onChangeTextarea}
      onSubmit={onSubmit}
    />
  );
}

export default CreateMemoTemplate;
