import { SidebarComponentType } from "@/components/Sidebar/_types/sidebar";
import { BadgePlus, Bus, Printer, ShieldUser } from "lucide-react";

export const SidebarComponents: SidebarComponentType[] = [
    {
        id: 1,
        title: "New Entry",
        icon: BadgePlus
    },
    {
        id: 2,
        title: "Driver",
        icon: ShieldUser
    },
    {
        id: 3,
        title: "Vehicle",
        icon: Bus
    },
    {
        id: 4,
        title: "Invoice",
        icon: Printer
    }
]