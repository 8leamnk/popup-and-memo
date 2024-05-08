import Textarea from '@/components/Atoms/Textarea';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: '내용을 입력하세요.',
    rows: 10,
    cols: 50,
    onChange: (e) => e.target.value,
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const MemoContent: StoryType = {
  args: {
    value: '',
    placeholder: '내용을 입력하세요.',
    rows: 10,
    cols: 50,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => e.target.value,
  },
};
