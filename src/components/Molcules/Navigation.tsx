import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Navigation({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Navigation;
