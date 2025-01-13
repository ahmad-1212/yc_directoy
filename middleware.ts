import { auth } from "@/auth";
import { NextResponse } from "next/server";

const protectedPages = ["/startup/create"];

export default auth((req) => {
  const pathName = req.nextUrl.pathname;
  if (!req.auth && protectedPages.includes(pathName)) {
    const newUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
