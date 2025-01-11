/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "../../_components/Dashboard/page";
import { Button } from "@/components/ui/button";
import { Bell, BellDot, Calendar, Calendar1 } from "lucide-react";
import { NotificationSheet } from "../../_components/NotificationSheet";
import ListItem from "./_components/LIstItem";

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
  return (
    <div>
      <DashboardPage className="">
        <DashboardPageHeader className="">
          <DashboardPageHeaderTitle className="">
            dashboard
          </DashboardPageHeaderTitle>
          <div className="flex flex-row gap-5">
            <NotificationSheet
              title="Notificaçoes"
              decription="Todas notificaçoes"
            >
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
            </NotificationSheet>
            <NotificationSheet
              title="Agendamento de reservas"
              decription="Agendamento vindo do site"
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
            </NotificationSheet>
          </div>
        </DashboardPageHeader>
        <DashboardPageMain className="flex flex-row justify-center w-full gap-10 ">
          <div className="text-sm sm:text-3xl font-bold font-sans uppercase flex items-center justify-between  w-[80%] p-2">
            Ola, thiago
            {announcement ? (
              <Button variant="outline">Finalizar anuncio</Button>
            ) : (
              <Button variant="outline">Cria um novo anuncio</Button>
            )}
          </div>
        </DashboardPageMain>
        <DashboardPageMain className="flex flex- justify-around  w-full gap-10">
          <div className="text-sm sm:text-1xl font-bold font-sans uppercase   w-[40%] p-2">
            <div className="flex items-center justify-between border-b border-zinc-300 ">
              <h1>Lista de anuncios</h1>
              <p>(0)</p>
            </div>
          </div>
          <div className="">
            <h1>Listagem de atualizaçoes</h1>

            <ul>
              {notifications.map((notifi) => {
                return <ListItem key={notifi.id} title={notifi.message} />;
              })}
            </ul>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    </div>
  );
}
