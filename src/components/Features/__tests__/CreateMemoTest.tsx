import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ReduxProvider from '@/provider/ReduxProvider';
import StyledComponentsRegistry from '@/lib/registry';
import Theme from '@/style/Theme';
import CreateMemoFeature from '../CreateMemoFeature';
import Popup from '@/components/Organisms/Popup';

const mockUseSession = jest.fn();
const mockPostMemo = jest.fn();

jest.mock('next-auth/react', () => ({
  useSession() {
    return mockUseSession();
  },
}));
jest.mock('@/actions/memo.actions', () => ({
  postMemo() {
    return mockPostMemo();
  },
}));

describe('메모 등록 기능 테스트', () => {
  const SESSION = {
    user: { name: '홍길동', email: 'test@test.com' },
  };
  const TITLE = '제목';
  const CONTENT = '내용';
  const POST_BUTTON = '메모 등록하기';
  const SUCCESS = '등록 완료';
  const FAIL = '등록 실패';

  mockUseSession.mockImplementation(() => ({ data: SESSION }));

  test('사용자 정보에 이메일이 있고, 입력창이 모두 비어있지 않으면 정상적으로 메모가 등록 된다.', async () => {
    // given
    const TITLE_INPUT = '메모1';
    const CONTENT_INPUT = '첫 번째 메모입니다.';
    const SUCCESS_MESSAGE = '정상적으로 등록되었습니다.';

    mockPostMemo.mockResolvedValue(SUCCESS_MESSAGE);

    const { getByText, getByLabelText } = render(
      <ReduxProvider>
        <StyledComponentsRegistry>
          <Theme>
            <CreateMemoFeature />
            <Popup />
          </Theme>
        </StyledComponentsRegistry>
      </ReduxProvider>,
    );

    // when
    const titleInput = getByLabelText(TITLE);
    const contentInput = getByLabelText(CONTENT);
    const postButton = getByText(POST_BUTTON);

    fireEvent.change(titleInput, { target: { value: TITLE_INPUT } });
    fireEvent.change(contentInput, { target: { value: CONTENT_INPUT } });
    fireEvent.click(postButton);

    // then
    await waitFor(
      () => {
        expect(getByText(SUCCESS)).toBeInTheDocument();
        expect(getByText(SUCCESS_MESSAGE)).toBeInTheDocument();
      },
      { timeout: 100 },
    );
  });

  test('입력창을 모두 입력하지 않으면 메모가 등록되지 않고 예외가 발생한다.', async () => {
    // given
    const TITLE_INPUT = '메모';
    const CONTENT_INPUT = '';
    const FAIL_MESSAGE =
      '비어 있는 입력창이 있거나 사용자 정보에 이메일이 없어서 등록을 하지 못했습니다.';
    const { getByText, getByLabelText } = render(
      <ReduxProvider>
        <StyledComponentsRegistry>
          <Theme>
            <CreateMemoFeature />
            <Popup />
          </Theme>
        </StyledComponentsRegistry>
      </ReduxProvider>,
    );

    // when
    const titleInput = getByLabelText(TITLE);
    const contentInput = getByLabelText(CONTENT);
    const postButton = getByText(POST_BUTTON);

    fireEvent.change(titleInput, { target: { value: TITLE_INPUT } });
    fireEvent.change(contentInput, { target: { value: CONTENT_INPUT } });
    fireEvent.click(postButton);

    // then
    await waitFor(
      () => {
        expect(getByText(FAIL)).toBeInTheDocument();
        expect(getByText(FAIL_MESSAGE)).toBeInTheDocument();
      },
      { timeout: 100 },
    );
  });
});
