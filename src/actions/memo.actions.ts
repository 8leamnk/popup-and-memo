'use server';

import axios from 'axios';

export const fetchMemoList = async (email: string | undefined | null) => {
  let response = null;

  if (email) {
    response = await axios.get(
      `http://localhost:3000/api/memo?email=${email}&isUnique=0`,
    );
  }

  if (response?.data?.data) {
    return response.data.data;
  }

  throw new Error('response.data.data가 없습니다.');
};

export const fetchtMemo = async (id: string | string[]) => {
  const response = await axios.get(
    `http://localhost:3000/api/memo?id=${id}&isUnique=1`,
  );

  if (response?.data?.data) {
    return response.data.data;
  }

  throw new Error('response.data.data가 없습니다.');
};

export const postMemo = async (
  title: string,
  content: string,
  email: string | undefined | null,
) => {
  let response = null;

  if (email) {
    response = await axios.post('http://localhost:3000/api/memo', {
      title,
      content: content.replaceAll('<br>', '\n'),
      email,
    });
  }

  if (response?.data?.message) {
    return response.data.message;
  }

  throw new Error('response.data.messag가 없습니다.');
};
