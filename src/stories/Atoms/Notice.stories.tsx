import type { Meta, StoryObj } from '@storybook/react';
import Notice from '@/components/Atoms/Notice';

const meta = {
  title: 'Atoms/Notice',
  component: Notice,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: '안내 문구' },
} satisfies Meta<typeof Notice>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const ErrorMessage: StoryType = {
  args: {
    children: '입력창을 모두 입력해주세요.',
  },
};
