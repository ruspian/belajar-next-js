import { NextResponse } from "next/server";

export async function POST(req) {
  const payload = await req.json();
  console.log(payload);

  return new Response(null, { status: 204 });
}
