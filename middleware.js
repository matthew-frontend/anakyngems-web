import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Check if this is the admin subdomain
  if (hostname.startsWith('kosol.')) {
    // Allow access to admin routes only from kosol subdomain
    if (pathname.startsWith('/admin')) {
      return NextResponse.next()
    }
    
    // Redirect root of kosol subdomain to admin
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    
    // Block other routes on kosol subdomain
    return NextResponse.redirect(new URL('https://www.anakyngems.com', request.url))
  }
  
  // Block admin access from main domain
  if (pathname.startsWith('/admin') && !hostname.startsWith('kosol.')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}