import { CACHE_TAG } from "@/lib/post";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const payload = await req.json();

  if (payload.model === "post") {
    revalidateTag(CACHE_TAG);
  }

  return new Response(null, { status: 204 });
}
