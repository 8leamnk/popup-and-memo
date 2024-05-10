'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

interface ModalBackProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function ModalBack({ children, onClick }: ModalBackProps) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default ModalBack;
