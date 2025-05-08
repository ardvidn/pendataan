// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("user-cookies")?.value;

  // Jika tidak ada token dan sedang akses /pendataan atau anak route-nya
  if (!token && request.nextUrl.pathname.startsWith("/pendataan")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika sudah login tapi akses halaman /login, arahkan ke /pendataan
  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/pendataan", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pendataan/:path*", "/login"],
};
