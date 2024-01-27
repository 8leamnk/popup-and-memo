import { PopupInner } from './types';

const popupData: PopupInner = {
  title: '팝업 타이틀',
  content: '팝업 내용',
};

function getPopupData(): Promise<PopupInner | null> {
  return new Promise((resolve, reject) => {
    if (popupData) {
      resolve(popupData);
    } else {
      reject();
    }
  });
}

export default getPopupData;
