export const runtime = "edge";

import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    const functionData = await db.function.delete({
      where: {
        id: id,
      },
    });

    if (!functionData) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(functionData);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { functionName: string } }
) {
  try {
    const { order, description, appName } = await req.json();
    const method = await db.method.create({
      data: {
        order: order,
        description: description,
        appName: appName,
        functionName: decodeUrl(params.functionName),
      },
    });
    if (!method) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(method);
  } catch (error) {
    console.log("[METHODS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const { id, title, ...values } = await req.json();
  try {
    const functionData = await db.function.update({
      where: {
        id: id,
      },
      data: {
        title: decodeUrl(title),
        ...values,
      },
    });

    if (!functionData) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(functionData);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
