import React, { ReactNode } from 'react'
import { SidebarCustom } from '@/components';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import "./_global.css";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
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