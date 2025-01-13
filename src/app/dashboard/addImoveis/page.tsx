/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/app/_components/Dashboard/page";
import { NotificationSheet } from "@/app/_components/NotificationSheet";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { BellDot, Bell, Calendar, Calendar1 } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function page() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      visible: true,
      message: "Testando a notificação",
    },
  ]);
  const [hasVisibleNotifications, setHasVisibleNotifications] = useState(false);
  return (
    <div>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Imoveis</DashboardPageHeaderTitle>
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
        <DashboardPageMain>
          <div className="">Cadastra um novo imovel</div>

          <div className="flex  flex-col">
            <form>
              <div className="">
                <label>Inserir as imagens</label>
                <button type="submit" className="">
                  Enviar imagens
                </button>
              </div>

              <div className="">preview</div>
            </form>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    </div>
  );
}
