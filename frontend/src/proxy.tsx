import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {

  const token = request.cookies.get("pos_token")?.value;
  const isLogin = Boolean(token);

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    if (isLogin) {
      return NextResponse.redirect(new URL("/kasir", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
