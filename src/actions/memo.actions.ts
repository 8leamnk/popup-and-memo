import axios from 'axios';

export const fetchMemoList = async (email: string | undefined | null) => {
  let response = null;

  if (email) {
    response = await axios.get(`/api/memo?email=${email}&isUnique=0`);
  }

  if (response?.data?.data) {
    return response.data.data;
  }

  throw new Error();
};

export const fetchtMemo = async (id: string | string[]) => {
  const response = await axios.get(`/api/memo?id=${id}&isUnique=1`);

  if (response?.data?.data) {
    return response.data.data;
  }

  throw new Error();
};

export const postMemo = async (
  title: string,
  content: string,
  email: string | undefined | null,
) => {
  let response = null;

  if (email) {
    response = await axios.post('/api/memo', {
      title,
      content: content.replaceAll('<br>', '\n'),
      email,
    });
  }

  if (response?.data?.message) {
    return response.data.message;
  }

  throw new Error();
};
