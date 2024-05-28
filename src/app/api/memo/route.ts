import prisma from '@/lib/prisma';
import { bubbleSort } from '@/lib/utils';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const email = searchParams.get('email') || '';
  const isUnique = Number(searchParams.get('isUnique'));

  try {
    let result = null;

    if (isUnique) {
      const response = await prisma.memo.findUnique({ where: { id } });
      result = { ...response, id: Number(response?.id) };
    } else {
      const response = await prisma.memo.findMany({ where: { email } });
      const data = response.map((item) => ({ ...item, id: Number(item?.id) }));
      result = bubbleSort(data);
    }

    return Response.json({ data: result });
  } catch (error) {
    return;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await prisma.memo.create({
      data: {
        title: body.title,
        content: body.content,
        email: body.email,
      },
    });

    // response.id 값을 가져오면 505 에러가 난다. BigInt를 Number로 변환하니 오류가 나지 않는다.
    return Response.json({
      status: 200,
      data: {
        id: Number(response.id),
        time: response.createdAt,
        title: response.title,
        content: response.content,
      },
      message: '메모가 정상적으로 등록되었습니다.',
    });
  } catch (error) {
    return;
  }
}
