"use client";

import {
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
  SideBarNavHeader,
  SideBarNavHeaderTitle,
  SideBarFooter,
} from "@/app/_components/Dashboard/SideBar";

import { usePathname } from "next/navigation";
import React from "react";
import UserDropdowm from "../UserDropdown";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "@/app/assets/logo.jpg";
import { useAuth } from "@/app/context/AuthContext";

type MainSidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function Main_SideBar({
  isOpen,
  toggleSidebar,
}: MainSidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen  w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <SideBar>
          <SideBarHeader className="flex items-center gap-2 p-4 my-29">
            <Image src={Logo} alt="logo" className="w-8 h-8 rounded-sm" />
            <h1 className="font-bold text-xl text-[#7e22ce]">
              Apple<span className="text-[#FE8302] font-bold">T</span>rip
            </h1>
          </SideBarHeader>
          <SideBarMain className="flex flex-col flex-grow">
            <SideBarNav>
              <SideBarNavMain>
                {user?.role === "super_admin" && (
                  <div className="flex flex-col gap-5">
                    <SideBarNavLink
                      href="/dashboard"
                      active={isActive("/dashboard/")}
                      className="text-md "
                    >
                      Painel
                    </SideBarNavLink>

                    <SideBarNavLink
                      href="/dashboard/admin/corretor"
                      active={isActive("/dashboard/admin/corretor")}
                    >
                      Cadsatra corretor
                    </SideBarNavLink>

                    <SideBarNavLink
                      href="/dashboard/Clientes"
                      active={isActive("/dashboard/admin/")}
                    >
                      Cadastra proprietario
                    </SideBarNavLink>
                    <SideBarNavLink
                      href="/dashboard/Clientes"
                      active={isActive("/dashboard/admin/")}
                    >
                      Gerenciar
                    </SideBarNavLink>
                    <SideBarNavLink
                      href="/dashboard/Clientes"
                      active={isActive("/dashboard/admin/")}
                    >
                      Notificação
                    </SideBarNavLink>
                  </div>
                )}
                {user?.role === "proprietario" && <p>Link do proprietari</p>}
                {user?.role === "corretor" && <p>Link do corretor</p>}
              </SideBarNavMain>
            </SideBarNav>

            <SideBarNav className="mt-auto">
              <SideBarNavHeader>
                <SideBarNavHeaderTitle>Listagem de link</SideBarNavHeaderTitle>
              </SideBarNavHeader>

              <SideBarNav>
                <SideBarNavLink href="/dashboard/help">
                  Precisa de ajuda
                </SideBarNavLink>
                <SideBarNavLink href="/">Nosso Site</SideBarNavLink>
              </SideBarNav>
            </SideBarNav>
          </SideBarMain>
          <SideBarFooter>
            <UserDropdowm />
          </SideBarFooter>
        </SideBar>
      </div>

      {/* Botão de menu no mobile */}
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
