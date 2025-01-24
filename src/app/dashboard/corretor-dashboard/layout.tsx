/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ReactNode } from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SideBar } from "./components/SideBar";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";


type LayoutProps = {
  children: ReactNode;
};

export default async function layout({ children }: LayoutProps) {
  const { user } = useAuth();
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <SideBar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <div className="flex justify-between w-full">
              <div className="flex">
                <h1 className="ml-4 text-lg font-semibold">Dashboard</h1>
              </div>
              <div className="flex items-center gap-5">
                <Badge variant="outline">{user?.role}</Badge>

                <Button variant={"secondary"}>
                  <LogOut />
                </Button>
              </div>
            </div>
          </header>
          <main className="p-4 ">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
