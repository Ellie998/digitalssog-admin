export const runtime = "edge";

import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, ...values } = await req.json();

  try {
    const functionData = await db.function.create({
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
