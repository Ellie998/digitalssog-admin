export const runtime = "edge";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const method = await db.method.delete({
      where: {
        id: id,
      },
    });

    if (!method) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(method);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const values = await req.json();
  try {
    const method = await db.method.update({
      where: {
        id: params.id,
      },
      data: {
        ...values,
      },
    });

    if (!method) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(method);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
