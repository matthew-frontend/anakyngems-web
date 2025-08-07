import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // กรณีเข้า subdomain admin
  if (hostname.startsWith("kosol.")) {
    const response = NextResponse.next();

    // ✅ เพิ่ม header สำหรับ layout เช็กว่าเป็น admin route
    if (pathname.startsWith("/admin")) {
      response.headers.set("x-admin-route", "true");
      return response;
    }

    // redirect root ของ kosol ไป /admin
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // redirect อื่นๆ กลับ main site
    return NextResponse.redirect(
      new URL("https://www.anakyngems.com", request.url)
    );
  }

  // Block admin access จาก main domain (ไม่ใช่ subdomain kosol) - เพื่อความปลอดภัย
  if (pathname.startsWith("/admin") && !hostname.startsWith("kosol.")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
