export const runtime = "edge";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const values = await req.json();

  try {
    const guide = await db.guide.create({
      data: {
        ...values,
      },
    });
    if (!guide) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(guide);
  } catch (error) {
    console.log("[GUIDES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
