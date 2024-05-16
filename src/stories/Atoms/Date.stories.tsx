import { Meta, StoryObj } from '@storybook/react';
import Date from '@/components/Atoms/Date';

const meta = {
  title: 'Atoms/Date',
  component: Date,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: '2024-05-16' },
} satisfies Meta<typeof Date>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const PostDate: StoryType = {
  args: { children: '2024-05-16' },
};
