import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { MemoType } from '@/constants/types';
import Theme from '@/style/Theme';
import MemoListFeature from '../MemoListFeatrue';

interface MemoList extends MemoType {
  email: string;
}

const mockGetSession = jest.fn();
const mockFetchMemoList = jest.fn();

jest.mock('@/lib/authOptions');

jest.mock('next-auth', () => ({
  getServerSession() {
    return mockGetSession();
  },
}));

jest.mock('@/actions/memo.actions', () => ({
  fetchMemoList() {
    return mockFetchMemoList();
  },
}));

describe('메모 불러오기 기능 테스트', () => {
  const SESSION = {
    user: { name: '홍길동', email: 'test@test.com' },
  };

  mockGetSession.mockResolvedValue(() => SESSION);

  test('컴포넌트가 마운트 되면 메모를 불러온다.', async () => {
    // given
    const MEMO_LIST: MemoList[] = [];

    for (let index = 0; index < 5; index += 1) {
      MEMO_LIST.push({
        id: index + 1,
        createdAt: `2024-05-0${index + 1}T00:00:00...`,
        title: `메모 NO.${index + 1}`,
        content: `${index + 1}번 메모입니다.`,
        email: 'test@test.com',
      });
    }

    mockFetchMemoList.mockResolvedValue(MEMO_LIST);

    const { getByText, queryByText } = render(
      <Theme>{await MemoListFeature()}</Theme>,
    );

    await waitFor(
      () => {
        MEMO_LIST.forEach((memo, index) => {
          expect(getByText(memo.title)).toBeInTheDocument();
          expect(getByText(`2024-05-0${index + 1}`)).toBeInTheDocument();
          expect(queryByText(memo.content)).not.toBeInTheDocument();
        });
      },
      { timeout: 100 },
    );
  });
});
