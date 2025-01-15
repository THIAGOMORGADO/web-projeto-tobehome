 
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
import { ReactNode, useState, useEffect } from "react";
import { db } from "@/app/firebaseServices/Firebase"; // Certifique-se de importar do arquivo correto
import { ref, onValue } from "firebase/database";

// Tipos para as notificações
type Notification = {
  id: string;
  message: string;
  visible: boolean;
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
  const [notifications, setNotifications] = useState<Notification[]>([]); // Estado para armazenar as notificações

  // Função para buscar as notificações do Firebase
  const fetchNotifications = () => {
    const notificationsRef = ref(db, "visitors"); // Caminho para as notificações no Firebase

    // Recuperar as notificações do Firebase
    onValue(notificationsRef, (snapshot) => {
      const data = snapshot.val(); // Pegar os dados da snapshot
      if (data) {
        // Se houver dados, cria um array com as notificações
        const notificationsArray: Notification[] = Object.keys(data).map(
          (key) => ({
            id: key,
            ...data[key], // Expande cada notificação com os dados
          })
        );
        setNotifications(notificationsArray); // Atualiza o estado com as notificações
      } else {
        setNotifications([]); // Caso não haja notificações
      }
    });
  };

  // Hook para pegar as notificações quando o componente for montado
  useEffect(() => {
    fetchNotifications(); // Chama a função para buscar as notificações

    // Limpa a inscrição quando o componente é desmontado para evitar vazamento de memória
    return () => {
      // O Firebase automaticamente limpa a inscrição, mas você pode fazer isso manualmente, se necessário.
    };
  }, []); // Array vazio faz com que a execução ocorra apenas uma vez ao montar o componente

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
              <div
                key={notification.id}
                className={`p-4 ${
                  notification.visible ? "bg-green-300" : "bg-gray-300"
                }`}
              >
                <p>{notification.name}</p>
                <p>{notification.phone}</p>
                <p>{notification.email}</p>
                <p>{notification.visible}</p>
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
