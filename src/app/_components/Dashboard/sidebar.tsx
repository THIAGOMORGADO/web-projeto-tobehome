/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export type SideBarGenericProps<T = any> = {
  children: ReactNode;
  className?: string;
} & T;

export function SideBar({ className, children }: SideBarGenericProps) {
  return (
    <aside
      className={cn(
        "border-r border-bordoer h-screen flex flex-col space-y-6",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function SideBarHeader({ className, children }: SideBarGenericProps) {
  return <header className={cn("p-6", className)}>{children}</header>;
}
export function SideBarHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return <h2 className={cn("", className)}>{children}</h2>;
}

export function SideBarMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("pt-6 px-3", className)}>{children}</main>;
}

export function SideBarNav({ className, children }: SideBarGenericProps) {
  return <nav className={cn("flex flex-col", className)}>{children}</nav>;
}

export function SideBarNavHeader({ className, children }: SideBarGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}

export function SideBarNavHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return (
    <h4
      className={cn(
        "font-medium text-xs uppercase text-muted-foreground ml-3",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function SideBarNavMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("flex flex-col", className)}>{children}</main>;
}

type SidebarNavLinkProps = {
  href: string;
};

export function SideBarNavLink({
  className,
  children,
  href,
}: SideBarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn("text-[#500052] text-sm px-3 py-2", className)}
    >
      {children}
    </Link>
  );
}

export function SideBarFooter({ className, children }: SideBarGenericProps) {
  return (
    <footer className={cn("p-6 mt-auto border-t border-border ", className)}>
      {children}
    </footer>
  );
}
