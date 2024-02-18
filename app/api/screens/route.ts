export const runtime = 'edge';

import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const values = await req.json();

  try {
    const screenData = await db.screen.create({
      data: { ...values },
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
