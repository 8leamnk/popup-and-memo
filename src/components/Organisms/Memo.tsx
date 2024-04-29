import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useInput from '@/hooks/useInput';
import useTextarea from '@/hooks/useTextarea';
import Form from '../Molcules/Form';
import Label from '../Molcules/Label';
import Input from '../Atoms/Input';
import Textarea from '../Atoms/Textarea';
import Button from '../Atoms/Button';
import Notice from '../Atoms/Notice';

const MemoButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.littleBoyBlue};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

interface Data {
  title: string;
  content: string;
}

function Memo() {
  const { input, onChangeInput, resetInput } = useInput();
  const { textarea, onChangeTextarea, resetTextarea } = useTextarea();
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: Data = { title: input, content: textarea };

    try {
      const response = await axios.post('/api/memo', data);

      resetInput();
      resetTextarea();
      setMessage(response.data.message);
    } catch (error: unknown) {
      console.log('등록 중 오류가 발생했습니다.');
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

      <Notice>{message}</Notice>
    </Form>
  );
}

export default Memo;
