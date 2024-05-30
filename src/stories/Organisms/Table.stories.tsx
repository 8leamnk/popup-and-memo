import { Meta, StoryObj } from '@storybook/react';
import Table from '@/components/Organisms/Table';
import { TableBodyInfo } from '@/constants/types';

interface TableList {
  id: number;
  title: string;
  location: string;
  createdAt: string;
}

const headerInfo = [
  { id: 1, width: '80px', flex: 'none', children: '번호' },
  { id: 2, width: '100%', flex: '1', children: '제목' },
  { id: 3, width: '120px', flex: 'none', children: '회의실' },
  { id: 4, width: '120px', flex: 'none', children: '등록 날짜' },
];

const tableLists = [
  {
    id: 1,
    title: '2024년 5월 8일 프론트엔드 팀 회의',
    location: 'A',
    createdAt: '2024-05-08',
  },
  {
    id: 2,
    title: '2024년 5월 9일 백엔드 팀 회의',
    location: 'C',
    createdAt: '2024-05-09',
  },
  {
    id: 3,
    title: '2024년 5월 9일 디자인 팀 회의',
    location: 'A',
    createdAt: '2024-05-09',
  },
  {
    id: 4,
    title: '2024년 5월 10일 기획 팀 회의',
    location: 'B',
    createdAt: '2024-05-10',
  },
];

function getBodyInfo(list: TableList, index: number): TableBodyInfo[] {
  return [
    {
      id: 1,
      children: index + 1,
      width: headerInfo[0].width,
      flex: headerInfo[0].flex,
      description: '번호',
      fontWeight: 'normal',
    },
    {
      id: 2,
      children: (
        <h1 style={{ fontSize: '16px', textDecoration: 'underline' }}>
          {list.title}
        </h1>
      ),
      width: headerInfo[1].width,
      flex: headerInfo[1].flex,
      description: '제목',
      fontWeight: 'bold',
    },
    {
      id: 3,
      children: list.location,
      width: headerInfo[2].width,
      flex: headerInfo[2].flex,
      description: '회의실',
      fontWeight: 'normal',
    },
    {
      id: 4,
      children: list.createdAt,
      width: headerInfo[3].width,
      flex: headerInfo[3].flex,
      description: '등록된 날짜',
      fontWeight: 'normal',
    },
  ];
}

const meta = {
  title: 'Organisms/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    maxWidth: '720px',
    tableLists,
    headerInfo,
    getBodyInfo,
  },
} satisfies Meta<typeof Table<TableList>>;

export default meta;

type StoryType = StoryObj<typeof Table<TableList>>;

export const Meeting: StoryType = {
  args: {
    maxWidth: '720px',
    tableLists,
    headerInfo,
    getBodyInfo,
  },
};
