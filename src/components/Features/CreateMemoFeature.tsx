'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { postMemo } from '@/actions/memo.actions';
import useInput from '@/hooks/useInput';
import useTextarea from '@/hooks/useTextarea';
import useValidationString from '@/hooks/useValidationString';
import usePopup from '@/hooks/usePopup';
import CreateMemo from '@/components/Organisms/CreateMemo';

function CreateMemoTemplate() {
  const { data: session } = useSession();
  const { input, onChangeInput, resetInput } = useInput();
  const { textarea, onChangeTextarea, resetTextarea } = useTextarea();
  const { validateEmpty } = useValidationString();
  const { openPopup } = usePopup();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      validateEmpty([input, textarea]);
      const message = await postMemo(input, textarea, session?.user?.email);
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
