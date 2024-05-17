import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/style/GlobalStyle';
import lightTheme from '../src/style/Theme/lightTheme';

// 미리보기(컴포넌트 즉 스토리를 미리 보여주는 영역) 화면에 대한 설정
// preview를 통해 UI가 어떻게 렌더링될 것인지 설정할 수 있다.
const preview: Preview = {
  // parameters는 스토리에 대한 메타데이터 정보들, 주로 스토리북 feature와 addon에 대한 설정
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
