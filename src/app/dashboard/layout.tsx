"use client";

import { PropsWithChildren, useState } from "react";
import Main_SideBar from "./_components/SideBar";

export default function Layout({ children }: PropsWithChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado da sidebar

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Main_SideBar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Conteúdo principal */}
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
          }`}
      >
        {children}
      </main>
    </div>
  );
}

