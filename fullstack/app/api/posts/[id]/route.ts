import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(_request: Request, ctx?: { params?: { id?: string } }) {
  let id = NaN;

  try {
    const url = new URL(_request.url);
    const parts = url.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    id = Number(last);
  } catch (e) {
    id = ctx?.params?.id ? Number(ctx.params.id) : NaN;
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
