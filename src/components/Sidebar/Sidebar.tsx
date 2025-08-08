"use client";

import React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarComponents } from "@/constants/DashBoardContents"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, LogOut, Settings } from "lucide-react"
import { useQuery } from "@apollo/client"
import { SiteConfigDocument } from "@/graphql/generated/graphql"
import { usePathname } from "next/navigation"
import Image from "next/image";

const SidebarCustom = () => {
    const { data } = useQuery(SiteConfigDocument);
    const pathname = usePathname();

    return (
        <Sidebar className="border-none shadow-none bg-gradient-to-b from-slate-50 to-white">
            <SidebarContent className="flex flex-col h-full border-none">
                <div className="flex items-center justify-start px-6 py-8 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                            <Image src={`https://billing-w07d.onrender.com/media/${data?.core?.siteConfig?.siteLogo}`} alt="Logo" width={150} height={150} />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
                                {data?.core?.siteConfig?.siteName || 'Sakthi Murugan Auto'}
                            </h1>
                            <p className="text-xs text-slate-500 font-medium">Dashboard</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 px-4 py-6">
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu className="space-y-2">
                                {SidebarComponents.map((item) => {
                                    const isActive = pathname === item.url;
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link
                                                    href={item.url}
                                                    className={cn(
                                                        "flex items-center gap-4 rounded-xl p-6 text-lg font-medium transition-all duration-200 group",
                                                        isActive
                                                            ? "bg-darkbg text-color shadow-sm"
                                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                    )}
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    <span className="flex-1">{item.title}</span>
                                                    <ChevronRight />
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </div>

                <div className="border-t border-slate-100 px-4 py-4">
                    <SidebarMenu className="space-y-1">
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href="/settings"
                                    className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                                        <Settings className="h-4 w-4" />
                                    </div>
                                    <span>Settings</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <button className="w-full flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-red-100 group-hover:text-red-500 transition-colors">
                                        <LogOut className="h-4 w-4" />
                                    </div>
                                    <span>Logout</span>
                                </button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}

export default SidebarCustom