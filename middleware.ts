import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (host !== "main.d370sik724g4hm.amplifyapp.com") return NextResponse.next();
  const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://spxmgmt.com");
  const response = NextResponse.redirect(destination, 308);
  response.headers.set("X-Robots-Tag", "noindex, follow");
  return response;
}

export const config = { matcher: "/:path*" };
