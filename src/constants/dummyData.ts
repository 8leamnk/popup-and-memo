import { PopupInfo } from './types';

const ERROR_MESSAGE: string = '팝업 정보를 받아오는 중 에러가 발생했습니다.';

const popupData: PopupInfo = {
  title: '팝업 타이틀',
  content: '팝업 내용',
};

function getPopupData(): Promise<PopupInfo> {
  return new Promise((resolve, reject) => {
    if (popupData) {
      resolve(popupData);
    } else {
      reject(new Error(ERROR_MESSAGE));
    }
  });
}

export default getPopupData;
