import React, { ReactNode } from 'react'
import { SidebarCustom } from '@/components';
import { Providers } from '@/providers/AppProvider';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import "./_global.css";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <SidebarCustom />
            <main>
                <Providers>
                    <SidebarTrigger />
                    {children}
                </Providers>
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout;