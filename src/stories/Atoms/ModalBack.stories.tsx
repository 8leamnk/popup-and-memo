import { Meta, StoryObj } from '@storybook/react';
import ModalBack from '@/components/Atoms/ModalBack';

const meta = {
  title: 'Atoms/ModalBack',
  component: ModalBack,
  tags: ['autodocs'],
  args: { children: '' },
} satisfies Meta<typeof ModalBack>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Modal: StoryType = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '120px',
          height: '80px',
          backgroundColor: '#fff',
        }}
      >
        모달 뒤의 배경
      </div>
    ),
  },
};
