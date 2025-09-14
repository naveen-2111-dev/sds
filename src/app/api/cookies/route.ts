import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const token = body.token;

    const res = NextResponse.json({ success: true });

    res.cookies.set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return res;
}
