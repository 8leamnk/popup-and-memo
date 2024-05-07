import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/style/Theme/lightTheme';
import Button from '@/components/Atoms/Button';
import React from 'react';

// 메타 데이터, 제네릭에 Button 컴포넌트의 타입을 넘겨준다.
const meta = {
  // 사이드바에 표시할 카테고리
  title: 'Atoms/Button',
  // 컴포넌트
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // 컴포넌트에 대한 문서를 자동으로 생성
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: 'BUTTON',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

// 스토리 타입, StoryObj의 제네릭에 컴포넌트의 타입을 넘겨준다.
type StoryType = StoryObj<typeof meta>;

// 하나의 스토리, 스토리는 named export 해준다
// 스토리 이름도 사이드바 카테고리에 표시된다
export const Primary: StoryType = {
  // 컴포넌트에 필요한 arguments, 리액트 컴포넌트에게는 Props
  args: {
    isPrimary: true,
    children: 'Primary',
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

// 또 하나의 스토리
export const Secondary: StoryType = {
  args: {
    isPrimary: false,
    children: 'Secondary',
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
