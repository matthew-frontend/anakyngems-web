import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Get secret from different sources
    let secret, path, tag;

    try {
      const body = await request.json();
      secret = body.secret || body;
      path = body.path;
      tag = body.tag;
    } catch {
      // If body is just a string, treat it as secret
      secret = await request.text();
    }

    // Also check URL params and headers as fallback
    const url = new URL(request.url);
    secret =
      secret ||
      url.searchParams.get("secret") ||
      request.headers.get("x-secret");

    // Verify secret key for security
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate specific path
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        path,
        message: `Revalidated ${path}`,
      });
    }

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({
        revalidated: true,
        tag,
        message: `Revalidated tag: ${tag}`,
      });
    }

    // Revalidate common paths
    revalidatePath("/");
    revalidatePath("/products");

    return NextResponse.json({
      revalidated: true,
      message: "Revalidated homepage and products",
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
