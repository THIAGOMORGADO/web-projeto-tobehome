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
          <h1 className="font-bold text-xl text=[#7e22ce]">
            Apple<span className="text-[#FE8302] font-bold">T</span>rip
          </h1>
        </SideBarHeader>
        <SideBarMain className="flex flex-col flex-grow">
          <SideBarNav>
            <SideBarNavMain>
              <SideBarNavLink
                href="/dashboard"
                active={isActive("/dashboard")}
                className="text-md"
              >
                Hoje
              </SideBarNavLink>

              <SideBarNavLink
                href="/dashboard/Imoveis"
                active={isActive("/dashboard/Imoveis")}
              >
                Calendario
              </SideBarNavLink>

              <SideBarNavLink
                href="/dashboard/Clientes"
                active={isActive("/dashboard/Clientes")}
              >
                Anuncios
              </SideBarNavLink>
              <SideBarNavLink
                href="/dashboard/Agendamentos"
                active={isActive("/dashboard/Agendamentos")}
              >
                Mensagens
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
