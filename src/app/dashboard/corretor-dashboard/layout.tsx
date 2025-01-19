/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ReactNode, useState } from "react";
import MainSidebar from "./components/main-sidebar";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <MainSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      {/* Conteúdo principal */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
