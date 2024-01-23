export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    const templateData = await db.template.delete({
      where: {
        id: id,
      },
    });

    if (!templateData) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }

    return NextResponse.json(templateData);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: { templateId: string } }) {
  try {
    const {} = await req.json();
    const screen = await db.screen.create({
      data: {
        id: params.templateId,
      },
    });
    if (!screen) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }
    return NextResponse.json(screen);
  } catch (error) {
    console.log('[SCREEN]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { templateId: string } }) {
  const { ...values } = await req.json();

  try {
    const templateData = await db.template.update({
      where: { id: params.templateId },
      data: { ...values },
    });

    if (!templateData) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }

    return NextResponse.json(templateData);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
