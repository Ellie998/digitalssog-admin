export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, appName, version, phoneName, main_color, sub_color } = await req.json();

  try {
    const templateData = await db.template.create({
      data: {
        id,
        appName,
        version,
        phoneName,
        main_color,
        sub_color,
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
