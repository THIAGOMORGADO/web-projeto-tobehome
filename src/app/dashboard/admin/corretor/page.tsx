/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { PropsWithChildren, useState } from "react";

import { useAuth } from "@/app/context/AuthContext";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
} from "@/app/_components/Dashboard/page";
import { VisitorsList } from "@/app/_components/NotificationSheet";
import { BellDot, Bell, Calendar, Calendar1 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  visible: boolean;
  message: string;
}

export default function dashboard() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      visible: true,
      message: "Testando a notificação",
    },
    {
      id: 2,
      visible: true,
      message: "Testando a notificação",
    },
  ]);
  const [announcement, setAnnouncement] = useState(false);
  const [hasVisibleNotifications, sethasVisibleNotifications] = useState(false);
  const { user } = useAuth();
  return (
    <div>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Corretor</DashboardPageHeaderTitle>
          <div className="flex flex-row gap-5">
            <VisitorsList title="Notificaçoes" description="Todas notificaçoes">
              <Button
                variant="secondary"
                className="bg-[#7e22ce] hover:bg-black"
              >
                {hasVisibleNotifications ? (
                  <BellDot className="text-[#FE8302]" />
                ) : (
                  <Bell className="text-[#FE8302]" />
                )}
              </Button>
            </VisitorsList>
            <VisitorsList
              title="Agendamento de reservas"
              description="Agendamento vindo do site"
            >
              <Button
                variant="secondary"
                className="bg-[#7e22ce] hover:bg-black"
              >
                {!hasVisibleNotifications ? (
                  <Calendar className="text-[#FE8302]" />
                ) : (
                  <Calendar1 className="text-[#FE8302]" />
                )}
              </Button>
            </VisitorsList>
          </div>
        </DashboardPageHeader>

        {user?.role === "super_admin" && (
          <div className="">
            <div className=" py-5 px-5 flex items-center justify-between border-b border-border">
              <h1>Adicionar o corretor</h1>
              <Button>Adicionar novo corretor</Button>
            </div>
            <div className="">
              <form></form>
            </div>
          </div>
        )}
      </DashboardPage>
    </div>
  );
}
