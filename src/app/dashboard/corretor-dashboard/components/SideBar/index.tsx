"use client";

import * as React from "react";
import { Home, Settings, Users, HelpCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";

const menuItems = [
  {
    icon: Home,
    label: "Cadastra Imovel",
    url: "/dashboard/corretor-dashboard",
  },
  { icon: Users, label: "Users", url: "/users" },
  { icon: Settings, label: "Settings", url: "/settings" },
  { icon: HelpCircle, label: "Help", url: "/help" },
];

export function SideBar() {
  return (
    <Sidebar className="border-r bg-red-500">
      <SidebarHeader className="p-4">
        TESTE
      </SidebarHeader>
      <SidebarContent>

        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <Link
                  href={`${item.url}/addnewproppety`}
                  className="flex items-center"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 items-start"></SidebarFooter>
    </Sidebar>
  );
}
