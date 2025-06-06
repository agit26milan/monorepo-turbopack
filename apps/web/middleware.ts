import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  if ((pathname === "/login" || pathname === "/register") && token) {
    const url = new URL("/dashboard", request.url);
    return NextResponse.redirect(url);
  }

  if (!token && pathname.startsWith("/dashboard")) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/register","/login","/dashboard/:path*"],
};
