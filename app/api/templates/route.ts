export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { ...values } = await req.json();

  try {
    const templateData = await db.template.create({
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
