import React, { ReactNode } from 'react'
import { SidebarCustom } from '@/components';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

import "./_global.css";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");

    if (!token) {
        redirect("/login");
    }

    return (
        <SidebarProvider>
            <SidebarCustom />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout;