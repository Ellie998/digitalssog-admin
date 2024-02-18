export const runtime = 'edge';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const guide_component = await db.guide_component.delete({
      where: {
        id: params.id,
      },
    });

    if (!guide_component) {
      return new NextResponse('Internal DB Error', { status: 404 });
    }

    return NextResponse.json(guide_component);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { ...values } = await req.json();
  try {
    const guide = await db.guide.findUnique({
      where: {
        id: params.id,
      },
      select: {
        guide_component: true,
      },
    });

    if (guide?.guide_component) {
      const guide_component = await db.guide_component.update({
        where: {
          guideId: params.id,
        },
        data: {
          ...values,
        },
      });

      if (!guide_component) {
        return new NextResponse('Internal DB Error', { status: 404 });
      }

      return NextResponse.json(guide_component);
    } else {
      const guide_component = await db.guide_component.create({
        data: {
          guideId: params.id,
          ...values,
        },
      });

      if (!guide_component) {
        return new NextResponse('Internal DB Error', { status: 404 });
      }

      return NextResponse.json(guide_component);
    }
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
