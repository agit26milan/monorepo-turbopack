import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('token')?.value;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Specify the paths where the middleware applies
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'], // Adjust as needed
};