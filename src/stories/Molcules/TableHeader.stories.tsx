import { Meta, StoryObj } from '@storybook/react';
import TableHeader from '@/components/Molcules/TableHeader';
import { TableHeaderInfo } from '@/constants/types';

const headerInfo: TableHeaderInfo[] = [
  { id: 1, children: '번호', width: '80px', flex: 'none' },
  { id: 2, children: '제목', width: '320px', flex: 'none' },
  { id: 3, children: '등록 날짜', width: '160px', flex: 'none' },
];

const meta = {
  title: 'Molcules/TableHeader',
  component: TableHeader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { headerInfo },
} satisfies Meta<typeof TableHeader>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const MemoTableHeader: StoryType = {
  args: { headerInfo },
};
