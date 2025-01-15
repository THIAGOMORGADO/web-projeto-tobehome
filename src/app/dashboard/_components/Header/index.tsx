"use client";

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
} from "@/app/_components/Dashboard/page";
import { VisitorsList } from "@/app/_components/NotificationSheet";
import { Button } from "@/components/ui/button";
import { BellDot, Bell, Calendar, Calendar1 } from "lucide-react";
import React, { useEffect, useState } from "react";

type TitlePageProps = {
  titlePage: string;
};

export default function Header({ titlePage }: TitlePageProps) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      visible: true,
      message: "Testando a notificação",
    },
  ]);

  // Checa se há notificações visíveis
  const hasVisibleNotifications = notifications.some((n) => n.visible);

  // Simula a remoção automática de uma notificação após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== 1)); // Remove a notificação de ID 1
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>{titlePage}</DashboardPageHeaderTitle>
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
      </DashboardPage>
    </div>
  );
}
