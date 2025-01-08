import { PropsWithChildren } from "react";
import {
  SideBar,
  SideBarFooter,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavHeader,
  SideBarNavHeaderTitle,
  SideBarNavLink,
  SideBarNavMain,
} from "../_components/Dashboard/sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
      <SideBar>
        <SideBarHeader>
          <h1>Informação</h1>
        </SideBarHeader>
        <SideBarMain>
          <SideBarNav>
            <SideBarNavMain>
              <SideBarNavLink href="/dashboard">Inicio</SideBarNavLink>
              <SideBarNavLink href="/dasgboard/settings">
                Configuraçoes
              </SideBarNavLink>
            </SideBarNavMain>
          </SideBarNav>

          <SideBarNav>
            <SideBarHeader>
              <SideBarNavHeader>
                <SideBarNavHeaderTitle>LIstagem de link</SideBarNavHeaderTitle>
              </SideBarNavHeader>
            </SideBarHeader>
            <SideBarNav>
              <SideBarNavLink href="/dashboard/help">
                Precisa de ajuda...
              </SideBarNavLink>
              <SideBarNavLink href="/">Nosso Site</SideBarNavLink>
            </SideBarNav>
          </SideBarNav>
        </SideBarMain>
        <SideBarFooter>
          <h1>Infor do usuario</h1>
        </SideBarFooter>
      </SideBar>
      <main>{children}</main>
    </div>
  );
}
