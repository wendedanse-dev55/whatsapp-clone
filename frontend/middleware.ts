import { NextRequest, NextResponse } from "next/server";

const authPaths: any = {
  "/verify": true,
  "/sign-up": true,
};

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get("api-auth");
  const path = request.nextUrl.pathname;
  const token = cookie?.value;
  if (!token && !authPaths[path]) {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  } else if (token && authPaths[path]) {
    return NextResponse.redirect(new URL("/chats", request.url));
  }
};
export const config = {
  matcher: ["/", "/sign-up", "/verify", "/chats"],
};
