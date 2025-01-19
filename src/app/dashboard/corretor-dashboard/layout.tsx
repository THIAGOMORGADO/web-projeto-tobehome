/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ReactNode } from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SideBar } from "./components/SideBar";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <SideBar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold">Dashboard</h1>
          </header>
          <main className="p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
