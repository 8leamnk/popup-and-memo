import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await prisma.memo.create({
      data: {
        title: body.title,
        content: body.content,
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
