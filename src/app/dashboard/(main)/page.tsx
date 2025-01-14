/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useContext, useState } from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "../../_components/Dashboard/page";
import { Button } from "@/components/ui/button";
import { Bell, BellDot, Calendar, Calendar1 } from "lucide-react";
import { NotificationSheet } from "../../_components/NotificationSheet";
import { AvatarProfile } from "./_components/avatar";
import ProductCarousel from "./_components/LIstItem";
import { useAuth } from "@/app/context/AuthContext";

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
                  <BellDot className="text-[#Fff]" />
                ) : (
                  <Bell className="text-[#fff] text-md" />
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
                  <Calendar className="text-[#fff]" />
                ) : (
                  <Calendar1 className="text-[#fff]" />
                )}
              </Button>
            </NotificationSheet>
          </div>
        </DashboardPageHeader>
        <DashboardPageMain className="flex flex-row justify-center w-full gap-10 ">
          <div className="text-sm sm:text-3xl font-bold font-sans uppercase flex items-center justify-between w-[100%] p-2">
            <div className="flex items-center gap-5">
              <AvatarProfile />
              <div className="">
                <h1 className="text-sm">Ola, {user?.name}</h1>
                <p className="text-[16px]">Tipo: {user?.role}</p>
              </div>
            </div>
            {announcement ? (
              <Button variant="outline">Finalizar anuncio</Button>
            ) : (
              <Button variant="outline">Cria um novo anuncio</Button>
            )}
          </div>
        </DashboardPageMain>
        <DashboardPageMain className="flex flex-row justify-between px-20  w-full ">
          <div className="flex flex-col">
            <h1>Imovei livres</h1>
            <ProductCarousel />
          </div>
        </DashboardPageMain>
      </DashboardPage>
    </div>
  );
}
