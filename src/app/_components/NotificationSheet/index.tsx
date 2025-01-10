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
import { ReactNode, useRef } from "react";

type NotificationSheetProps = {
  children?: ReactNode;
  title?: string;
  decription?: string;
};

export function NotificationSheet({
  children,
  title,
  decription,
}: NotificationSheetProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-row gap-5" ref={ref}>
          {children}
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#7e22ce]">
        <SheetHeader className="bg-red-300 my-10">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{decription}</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
