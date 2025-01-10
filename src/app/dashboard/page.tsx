/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "../_components/Dashboard/page";
import { Button } from "@/components/ui/button";
import { Bell, BellDot, Calendar, Calendar1 } from "lucide-react";
import { NotificationSheet } from "../_components/NotificationSheet";

export default function dashboard() {
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
          <DashboardPageHeaderTitle>dashboard</DashboardPageHeaderTitle>
          <div className="flex flex-row gap-5">
            <NotificationSheet
              title="Notificaçoes"
              decription="Todas notificaçoes"
            >
              <Button variant="secondary" className="bg-[#7e22ce]">
                {hasVisibleNotifications ? (
                  <BellDot className="text-[#FE8302]" />
                ) : (
                  <Bell className="text-[#FE8302]" />
                )}
              </Button>
            </NotificationSheet>
            <NotificationSheet
              title="Agendamento de reservas"
              decription="Agendamento vindo do site"
            >
              <Button variant="secondary" className="bg-[#7e22ce]">
                {!hasVisibleNotifications ? (
                  <Calendar className="text-[#FE8302]" />
                ) : (
                  <Calendar1 className="text-[#FE8302]" />
                )}
              </Button>
            </NotificationSheet>
          </div>
        </DashboardPageHeader>
        <DashboardPageMain>
          <h1>Ola, Usuario </h1>
          <p>Qual tipo desse Usuario, </p>
        </DashboardPageMain>
      </DashboardPage>
    </div>
  );
}
