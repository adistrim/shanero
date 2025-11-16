import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { settings } from './settings';

export function middleware(request: NextRequest) {
  const isProduction = settings.ENV === 'production';
  const { pathname } = request.nextUrl;

  // If in production mode, only allow access to the root path
  if (isProduction && pathname !== '/') {
    // Redirect all other routes to the root
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
