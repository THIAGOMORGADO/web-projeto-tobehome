import { PropsWithChildren } from "react";

import Main_SideBar from "./_components/SideBar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[14rem_1fr] ">
      <Main_SideBar />
      <main>{children}</main>
    </div>
  );
}
