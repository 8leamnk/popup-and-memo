import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import Theme from '@/style/Theme';
import SelectedMemoFeature from '../SelectedMemoFeature';

const mockGetServerSession = jest.fn();
const mockFetchMemo = jest.fn();

jest.mock('next-auth', () => ({
  getServerSession() {
    return mockGetServerSession();
  },
}));

jest.mock('@/actions/memo.actions', () => ({
  fetchtMemo() {
    return mockFetchMemo();
  },
}));

describe('해당 메모 보여주기 기능 테스트', () => {
  // given
  const MEMO = {
    id: 7,
    createdAt: '2024-05-16',
    title: 'React 19 Beta',
    content: `리액트 19에서 새롭게 등장하는 것은 무엇인가요?\n액션(Actions)\n리액트 애플리케이션에서는 데이터를 변경하고 이에 대한 응답을 기반으로 상태를 업데이트하는 것이 일반적입니다. 예를 들어, 사용자가 이름을 변경하기 위해 양식(form)을 제출하면, API 요청을 보낸 다음 응답을 처리합니다. 이전에는 대기 상태(pending state), 에러, 낙관적 업데이트, 순차적 요청을 직접 처리해야만 했습니다.`,
    email: 'test@test.com',
  };

  test('해당 메모 페이지에 진입 후 사용자 정보가 파악 되지 않으면 메모를 보여주지 않는다.', async () => {
    // given
    mockGetServerSession.mockResolvedValue(null);

    const { queryByText } = render(
      <Theme>{await SelectedMemoFeature({ id: '7' })}</Theme>,
    );

    // then
    await waitFor(
      () => {
        expect(queryByText(MEMO.title)).not.toBeInTheDocument();
        expect(queryByText(MEMO.createdAt)).not.toBeInTheDocument();
      },
      { timeout: 100 },
    );
  });

  test('해당 메모 페이지에 진입 후 사용자 정보가 파악 되면 해당 메모를 보여준다.', async () => {
    // when
    mockGetServerSession.mockResolvedValue(true);
    mockFetchMemo.mockResolvedValue(MEMO);

    const { getByText } = render(
      <Theme>{await SelectedMemoFeature({ id: '7' })}</Theme>,
    );

    // then
    await waitFor(
      () => {
        expect(getByText(MEMO.title)).toBeInTheDocument();
        expect(getByText(MEMO.createdAt)).toBeInTheDocument();
        MEMO.content.split(/\n/).forEach((text) => {
          expect(getByText(text)).toBeInTheDocument();
        });
      },
      { timeout: 100 },
    );
  });
});
