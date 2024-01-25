'use client';

import React from 'react';
import usePopup from '@/hooks/usePopup';
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

const Inner = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;

  h1 {
    font-size: 24px;
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

function Popup() {
  const { popupState, popupInfo, closePopup } = usePopup();

  if (!popupState) {
    return '';
  }

  if (!popupInfo) {
    // TODO: 팝업 정보가 없을 때 내용 보여주기
    // return (
    //   <Wrapper>
    //     <Inner>
    //       <h1></h1>
    //       <p></p>
    //       <button onClick={closePopup}>닫기</button>
    //     </Inner>
    //   </Wrapper>
    // );
    return '';
  }

  return (
    <Wrapper>
      <Inner>
        <h1>{popupInfo.title}</h1>
        <p>{popupInfo.content}</p>
        <button onClick={closePopup}>닫기</button>
      </Inner>
    </Wrapper>
  );
}

export default React.memo(Popup);
