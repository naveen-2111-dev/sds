import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth_token")?.value;
    const url = req.nextUrl;

    if (token && url.pathname === "/login") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!token && url.pathname === "/") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/login"],
};
