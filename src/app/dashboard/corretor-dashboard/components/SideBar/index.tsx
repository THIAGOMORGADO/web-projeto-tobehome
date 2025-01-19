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

const menuItems = [
  { icon: Home, label: "Home", url: "/" },
  { icon: Users, label: "Users", url: "/users" },
  { icon: Settings, label: "Settings", url: "/settings" },
  { icon: HelpCircle, label: "Help", url: "/help" },
];

export function SideBar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold">My App</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-sm text-muted-foreground">© 2025 My Company</p>
      </SidebarFooter>
    </Sidebar>
  );
}
