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
        "border-r border-[#FE8302]  h-screen flex flex-col space-y-6 bg-purple-700",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function SideBarHeader({ className, children }: SideBarGenericProps) {
  return (
    <header className={cn("p-6 py-2 border-b border-[#FE8302]", className)}>
      {children}
    </header>
  );
}

export function SideBarHeaderMain({
  className,
  children,
}: SideBarGenericProps) {
  return <main className={cn("p-6", className)}>{children}</main>;
}
export function SideBarHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return <h2 className={cn("", className)}>{children}</h2>;
}

export function SideBarMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("px-3 ", className)}>{children}</main>;
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
        "flex items-center font-medium text-xs uppercase text-muted-foreground text-center text-[#FE8302]",
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
  active?: boolean;
};

export function SideBarNavLink({
  className,
  children,
  href,
  active,
}: SideBarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        " text-[#FE8302] text-xs px-2 py-2 rounded-md flex items-center",
        active && "bg-[#fe840238]",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SideBarFooter({ className, children }: SideBarGenericProps) {
  return (
    <footer
      className={cn(
        "p-6 mt-auto border-t border-border border-[#FE8302]",
        className
      )}
    >
      {children}
    </footer>
  );
}
