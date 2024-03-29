export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    const screenData = await db.screen.delete({
      where: {
        id: id,
      },
    });

    if (!screenData) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }

    return NextResponse.json(screenData);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { screenId: string } }) {
  const { name, bgColor, elements, template_id } = await req.json();

  try {
    const screenData = await db.screen.update({
      where: {
        id: params.screenId,
      },
      data: {
        name,
        bgColor,
        elements,
        template_id: template_id,
      },
    });

    if (!screenData) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }

    return NextResponse.json(screenData);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
