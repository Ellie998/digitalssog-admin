export const runtime = "edge";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const values = await req.json();

  try {
    const guide_component = await db.guide_component.create({
      data: {
        ...values,
      },
    });
    if (!guide_component) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(guide_component);
  } catch (error) {
    console.log("[GUIDE COMPONENTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
