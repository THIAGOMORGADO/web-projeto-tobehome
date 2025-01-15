/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { PropsWithChildren, ReactNode, useState } from "react";

import { useAuth } from "@/app/context/AuthContext";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
} from "@/app/_components/Dashboard/page";
import { VisitorsList } from "@/app/_components/NotificationSheet";
import { BellDot, Bell, Calendar, Calendar1 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  children: ReactNode;
};

interface Notification {
  id: number;
  visible: boolean;
  message: string;
}

export default function dashboard({ children }: Props) {
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
          <DashboardPageHeaderTitle>dashboard</DashboardPageHeaderTitle>
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

        {user?.role === "super_admin" && <h1>Tela do usuario admin</h1>}
        {user?.role === "proprietario" && <h1>Tela do usuario Proprietario</h1>}
      </DashboardPage>
    </div>
  );
}
