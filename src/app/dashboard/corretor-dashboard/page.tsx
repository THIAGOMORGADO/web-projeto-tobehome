/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { DashboardPageHeader } from "@/app/components/dashboard/dashboard";
import { DashboardPage } from "@/app/components/dashboard/dashboard";

import React from "react";

export default function page() {
  return (
    <DashboardPage>
      <DashboardPageHeader className="">
        <div className="">
          <h1>dahsboard</h1>
        </div>
      </DashboardPageHeader>
    </DashboardPage>
  );
}
