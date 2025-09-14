import React, { ReactNode } from 'react'
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

const LoginLayout = async ({ children }: { children: ReactNode }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");

    if (token) {
        redirect("/");
    }

    return (
        <main>
            {children}
        </main>
    )
}

export default LoginLayout;