import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode, useEffect, useState } from "react";

// Tipos para as notificações
type Notification = {
  id: string;
  message: string;
  name: string;
  phone: string;
  email: string;
};

type NotificationSheetProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export function VisitorsList({
  children,
  title,
  description,
}: NotificationSheetProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@example.com",
      phone: "+55 11 91234-5678",
      message: "Gostaria de saber mais sobre seus serviços.",
    },
  ]);

  useEffect(() => {
    setNotifications((prevNotifications) => [...prevNotifications]);
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-row gap-5">{children}</div>
      </SheetTrigger>
      <SheetContent className="bg-[#7e22ce]">
        <SheetHeader className="bg-red-300 my-10">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        {/* Exibe as notificações */}
        <div>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className={`p-4 `}>
                <p>{notification.name}</p>
                <p>{notification.phone}</p>
                <p>{notification.email}</p>
              </div>
            ))
          ) : (
            <p>Não há notificações.</p>
          )}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
