/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export type SideBarGenericProps<T = any> = {
  children: ReactNode;
  className?: string;
} & T;

export function SideBar({ className, children }: SideBarGenericProps) {
  return <aside className={cn("", className)}>{children}</aside>;
}

export function SideBarHeader({ className, children }: SideBarGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}
export function SideBarHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return <h2 className={cn("", className)}>{children}</h2>;
}

export function SideBarMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("", className)}>{children}</main>;
}

export function SideBarNav({ className, children }: SideBarGenericProps) {
  return <nav className={cn("", className)}>{children}</nav>;
}

export function SideBarNavHeader({ className, children }: SideBarGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}

export function SideBarNavHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return <h4 className={cn("", className)}>{children}</h4>;
}

export function SideBarNavMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("", className)}>{children}</main>;
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
    <Link href={href} className={cn("", className)}>
      {children}
    </Link>
  );
}

export function SideBarFooter({ className, children }: SideBarGenericProps) {
  return <footer className={cn("", className)}>{children}</footer>;
}
