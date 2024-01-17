export const runtime = "edge";
import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { order, description, appName, functionName } = await req.json();
    const method = await db.method.create({
      data: {
        order: order,
        description: description,
        appName: decodeUrl(appName),
        functionName: decodeUrl(functionName),
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
