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
  SideBarHeaderMain,
} from "@/app/_components/Dashboard/SideBar";
import { HomeIcon, Settings, HousePlus } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import Logo from "@/app/assets/logo.jpg";

export default function Main_SideBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div>
      <SideBar>
        <SideBarHeader className="bg-[#050042] flex item-center justify-center">
          <h1>Ola</h1>
        </SideBarHeader>
        <SideBarMain className="flex flex-col flex-grow">
          <SideBarNav>
            <SideBarNavMain>
              <SideBarNavLink href="/dashboard" active={isActive("/dashboard")}>
                <HomeIcon />
                Inicio
              </SideBarNavLink>
              <SideBarNavLink
                href="/dashboard/settings"
                active={isActive("/dashboard/settings")}
              >
                <Settings />
                Configuraçoes
              </SideBarNavLink>
              <SideBarNavLink
                href="/dashboard/addnewimovel"
                active={isActive("/dashboard/addnewimovel")}
              >
                <HousePlus />
                Cadastra um novo imovel
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
          <h1>Infor do usuario</h1>
        </SideBarFooter>
      </SideBar>
    </div>
  );
}
