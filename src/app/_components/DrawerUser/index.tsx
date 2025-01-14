"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, User2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DropMenuUser() {
  const routes = useRouter();

  const handleLogin = () => {
    // Implement your login logic here
    routes.push("/signin");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"link"}
          className="relative h-8 w-8 rounded-full bg-black hover:bg-black active:bg-black"
        >
          <Avatar className="h-8 w-8 bg-black">
            <AvatarFallback className="bg-black">
              <User2 className=" text-white" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem onClick={handleLogin}>
          <LogIn className="mr-2 h-4 w-4 " />
          <span>Log in</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
