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
import { Calendar, HousePlus, LayoutDashboard, User } from "lucide-react";

import { usePathname } from "next/navigation";
import React from "react";
import UserDropdowm from "../UserDropdown";
import Image from "next/image";

import Logo from "@/app/assets/logo.jpg";

export default function Main_SideBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div>
      <SideBar className="">
        <SideBarHeader className="flex items-center gap-2">
          <Image src={Logo} alt="logo" className="w-8 h-8 rounded-sm" />
          <h1 className="text-[#FE8302] font-bold text-">To Be Home </h1>
        </SideBarHeader>
        <SideBarMain className="flex flex-col flex-grow">
          <SideBarNav>
            <SideBarNavMain>
              <SideBarNavLink href="/dashboard" active={isActive("/dashboard")}>
                <LayoutDashboard className="w-5 mr-5" />
                Dashboard
              </SideBarNavLink>

              <SideBarNavLink
                href="/dashboard/Imoveis"
                active={isActive("/dashboard/Imoveis")}
              >
                <HousePlus className="w-5 mr-5" />
                Imoveis
              </SideBarNavLink>

              <SideBarNavLink
                href="/dashboard/Clientes"
                active={isActive("/dashboard/Clientes")}
              >
                <User className="w-5 mr-5" />
                Clientes
              </SideBarNavLink>
              <SideBarNavLink
                href="/dashboard/Agendamentos"
                active={isActive("/dashboard/Agendamentos")}
              >
                <Calendar className="w-5 mr-5" />
                Agendamentos
              </SideBarNavLink>
            </SideBarNavMain>
          </SideBarNav>

          <SideBarNav className="mt-auto">
            <SideBarNavHeader>
              <SideBarNavHeaderTitle>LIstagem de link</SideBarNavHeaderTitle>
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
  );
}
