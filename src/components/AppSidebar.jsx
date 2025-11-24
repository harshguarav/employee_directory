import React from "react"
import { Home, User2, ChevronUp } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarHeader,
} from "./ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" className="border-r border-black/5 dark:border-white/5 bg-bg-light dark:bg-black">
            <SidebarHeader className="p-6 group-data-[collapsible=icon]:p-2">
                <div className="flex items-center gap-3 font-serif font-medium text-xl text-text-primary-dark dark:text-text-primary-light group-data-[collapsible=icon]:justify-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg shadow-lg group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:text-sm">
                        P
                    </div>
                    <span className="group-data-[collapsible=icon]:hidden tracking-tight">Penthara</span>
                </div>
            </SidebarHeader>
            <SidebarContent className="px-4 mt-4 group-data-[collapsible=icon]:px-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title} className="h-12 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary hover:text-text-primary-dark dark:hover:text-white transition-all group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!p-1">
                                        <a href={item.url}>
                                            <item.icon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-base group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-6 border-t border-black/5 dark:border-white/5 group-data-[collapsible=icon]:p-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="h-12 px-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary hover:text-text-primary-dark dark:hover:text-white transition-all cursor-pointer group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!p-1">
                                    <User2 className="w-5 h-5 shrink-0" />
                                    <span className="font-medium text-base group-data-[collapsible=icon]:hidden">Admin User</span>
                                    <ChevronUp className="ml-auto w-4 h-4 group-data-[collapsible=icon]:hidden" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                align="end"
                                className="w-56 bg-white dark:bg-bg-off-black border border-black/5 dark:border-white/5 shadow-xl rounded-xl p-2"
                            >
                                <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-bg-light dark:hover:bg-white/5 px-3 py-2">
                                    <span className="text-sm">Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-bg-light dark:hover:bg-white/5 px-3 py-2">
                                    <span className="text-sm">Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
