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

import React from "react";

export default function UserDropdowm() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="relative h-8 flex items-center justify-between w-full !px-0 space-x-4 bg-[#7e22ce]"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col space-y-1 flex-1 text-left">
              <p className="text-sm font-medium leading-none text-[#FE8302]">
                shadcn
              </p>
              <p className="text-xs leading-none text-muted-foreground text-[#FE8302]">
                m@example.com
              </p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 bg-[#7e22ce] border-[#FE8302]"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none text-[#FE8302] ">
                shadcn
              </p>
              <p className="text-xs leading-none text-muted-foreground text-[#FE8302]">
                m@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="">
            <DropdownMenuItem className="text-[#FE8302]">
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#FE8302]">
              <Settings />
              configuração
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-between border-border text-[#FE8302] font-bold">
            Desconectar
            <LogOut className="text-[#FE8302]" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
