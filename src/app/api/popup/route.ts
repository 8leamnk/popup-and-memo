import { PopupInner } from '@/constants/types';

export async function GET() {
  try {
    const START = 1;
    const END = 10;
    const data: PopupInner[] = [];

    for (let i = START; i <= END; i += 1) {
      data.push({
        title: `팝업 NO.${i}`,
        content: `${i}번째 팝업입니다.`,
        popupNumber: i,
      });
    }

    return Response.json({ status: 200, data });
  } catch (error) {
    return Response.json({ status: 500, message: 'failed to fetch data' });
  }
}
