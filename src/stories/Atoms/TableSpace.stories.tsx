import { Meta, StoryObj } from '@storybook/react';
import TableSpace from '@/components/Atoms/TableSpace';

const meta = {
  title: 'Atoms/TableSpace',
  component: TableSpace,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    width: '120px',
    fontWeight: 'normal',
    flex: 'none',
    children: 'Table Space',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          border: '1px solid #60c8b3',
          borderRight: 'none',
          borderBottom: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TableSpace>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const TableHeaderOne: StoryType = {
  args: {
    width: '120px',
    fontWeight: 'bold',
    flex: 'none',
    type: 'header',
    children: '번호',
  },
};

export const TableBodyOne: StoryType = {
  args: {
    width: '120px',
    fontWeight: 'normal',
    flex: 'none',
    children: '1',
  },
};
