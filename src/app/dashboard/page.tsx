/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "../_components/Dashboard/page";

export default function dashboard() {
  return (
    <div>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>dashboard</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>
          <h1>Ola, Usuario </h1>
          <p>Qual tipo desse Usuario, </p>
        </DashboardPageMain>
      </DashboardPage>
    </div>
  );
}
