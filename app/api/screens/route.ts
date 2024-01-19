export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, template_id, name } = await req.json();
  console.log(id, template_id);

  try {
    const screenData = await db.screen.create({
      data: {
        id,
        name,
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
