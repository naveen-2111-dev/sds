import { SidebarComponentType } from "@/components/Sidebar/_types/sidebar";
import { BadgePlus, Bitcoin, Bus, ListTodo, Printer, ShieldUser, SwatchBook, Users } from "lucide-react";

export const SidebarComponents: SidebarComponentType[] = [
    {
        id: 1,
        title: "New Entry",
        icon: BadgePlus,
        url: "/newentry"
    },
    {
        id: 2,
        title: "Driver",
        icon: ShieldUser,
        url: "/drivers"

    },
    {
        id: 3,
        title: "Vehicle",
        icon: Bus,
        url: "/vehicles"
    },
    {
        id: 4,
        title: "Invoice",
        icon: Printer,
        url: "/r"
    },
    {
        id: 5,
        title: "Parties",
        icon: Users,
        url: "/parties"
    },
    {
        id: 6,
        title: "Items",
        icon: ListTodo,
        url: "/items"
    },
    {
        id: 7,
        title: "Entries",
        icon: SwatchBook,
        url: "/entries"
    },
    {
        id: 8,
        title: "Payments",
        icon: Bitcoin,
        url: "/payments"
    },
]