'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

function ModalBack({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ModalBack;
