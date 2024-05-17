import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/Atoms/Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    type: 'text',
    value: '',
    placeholder: '제목을 입력하세요.',
    onChange: (e) => e.target.value,
  },
} satisfies Meta<typeof Input>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const MemoTitle: StoryType = {
  args: {
    type: 'text',
    value: '',
    placeholder: '제목을 입력하세요.',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => e.target.value,
  },
};
