import { Meta, StoryObj } from '@storybook/react';
import TableBody from '@/components/Molcules/TableBody';
import { TableBodyInfo } from '@/constants/types';

const bodyInfo: TableBodyInfo[] = [
  {
    id: 1,
    children: '1',
    width: '80px',
    flex: 'none',
    description: '번호',
    fontWeight: 'normal',
  },
  {
    id: 2,
    children: (
      <h1 style={{ textDecoration: 'underline', fontSize: '16px' }}>
        2024년 5월 8일 회의 내용
      </h1>
    ),
    width: '320px',
    flex: '1',
    description: '제목',
    fontWeight: 'bold',
  },
  {
    id: 3,
    children: '2024-05-08',
    width: '160px',
    flex: 'none',
    description: '등록된 날짜',
    fontWeight: 'normal',
  },
];

const meta = {
  title: 'Molcules/TableBody',
  component: TableBody,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { bodyInfo },
} satisfies Meta<typeof TableBody>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const MeetingTableBody: StoryType = {
  args: { bodyInfo },
};
