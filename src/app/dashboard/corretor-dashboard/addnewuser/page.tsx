import {
  DashboardPage,
  DashboardPageMain,
} from "@/app/components/dashboard/dashboard";
import { DashboardPageHeader } from "@/app/components/dashboard/dashboard";
import React from "react";

export default function page() {
  return (
    <DashboardPage>
      <DashboardPageHeader className="">
        <div className="">
          <h1>Cadastra o usuaro</h1>
        </div>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Conteudo</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
}
