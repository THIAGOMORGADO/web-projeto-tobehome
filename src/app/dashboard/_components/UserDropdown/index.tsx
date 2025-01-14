import { useAuth } from "@/app/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

export default function UserDropdowm() {
  const { logout } = useAuth();
  const routes = useRouter();

  const handleLogout = () => {
    logout();

    return routes.push("/signin");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="relative h-8 flex items-center justify-between w-full !px-0 space-x-4"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col space-y-1 flex-1 text-left">
              <p className="text-sm font-medium leading-none ">shadcn</p>
              <p className="text-xs leading-none text-muted-foreground ">
                m@example.com
              </p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 " align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none  ">shadcn</p>
              <p className="text-xs leading-none text-muted-foreground ">
                m@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="">
            <DropdownMenuItem className="">
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Settings />
              configuração
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-between border-border  font-bold">
            Desconectar
            <LogOut className="" onClick={handleLogout} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
