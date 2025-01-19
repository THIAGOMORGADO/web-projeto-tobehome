import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain,
} from "@/app/components/dashboard/sidebar";
import { UserDropdown } from "@/app/components/dashboard/User-Dropdown";
import { HousePlus, UserPlus2 } from "lucide-react";
import Image from "next/image";
import React from "react";

import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/app/assets/logo.jpg";

type MainSidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function MainSidebar({
  isOpen,
  toggleSidebar,
}: MainSidebarProps) {
  return (
    <div className="">
      <div
        className={`fixed top-0 left-0 h-screen  w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <Sidebar>
          <SidebarHeader>
            <Image src={Logo} className="w-10" alt="logo" />
            <SidebarHeaderTitle>AppleTrip</SidebarHeaderTitle>
          </SidebarHeader>
          <SidebarMain className="flex flex-col flex-grow">
            <SidebarNav>
              <SidebarNavMain>
                <SidebarNavLink href="/dashboard/corretor-dashboard/addnewproppety">
                  <HousePlus className="w-3 h-3 mr-3" />
                  Cadastra novo imovel
                </SidebarNavLink>
                <SidebarNavLink href="/dashboard/corretor-dashboard">
                  <UserPlus2 className="w-3 h-3 mr-3" />
                  Cadastra novo Cliente
                </SidebarNavLink>
              </SidebarNavMain>
            </SidebarNav>

            <SidebarNav className="mt-auto">
              <SidebarNavHeader>
                <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
              </SidebarNavHeader>
              <SidebarNavMain>
                <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
                <SidebarNavLink href="/">Site</SidebarNavLink>
              </SidebarNavMain>
            </SidebarNav>
          </SidebarMain>
          <SidebarFooter>
            <UserDropdown />
          </SidebarFooter>
        </Sidebar>
      </div>
      <div
        className={`fixed top-1 left-4 z-50 flex items-center ${
          isOpen ? "ml-64" : "ml-0"
        } md:hidden transition-all duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-200 rounded-full shadow-lg"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>
  );
}
