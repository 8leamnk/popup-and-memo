import { PopupServerData } from '@/constants/types';

const getRandomPopups = () => {
  const data: PopupServerData = {};
  const MAX = 10;

  while (Object.keys(data).length < MAX) {
    const random = Math.floor(Math.random() * MAX) + 1;

    if (!data[random]) {
      data[random] = {
        title: `팝업 NO.${random}`,
        content: `${random}번째 팝업입니다.`,
        popupNumber: random,
      };
    }
  }

  return data;
};

export async function GET() {
  try {
    const data = getRandomPopups();

    return Response.json({ status: 200, data });
  } catch (error) {
    return;
  }
}
