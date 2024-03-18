import { PopupInner } from './types';

const ERROR_MESSAGE: string = '팝업 정보를 받아오는 중 에러가 발생했습니다.';

function getPopupData(): Promise<PopupInner[]> {
  return new Promise((resolve, reject) => {
    const START = 1;
    const END = 10;
    const popupData: PopupInner[] = [];

    for (let i = START; i <= END; i += 1) {
      popupData.push({
        title: `팝업 NO.${i}`,
        content: `${i}번째 팝업입니다.`,
        popupNumber: i,
      });
    }

    if (popupData.length > 0) {
      resolve(popupData);
    } else {
      reject(new Error(ERROR_MESSAGE));
    }
  });
}

export default getPopupData;
