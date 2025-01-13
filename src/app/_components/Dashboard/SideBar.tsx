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
        "border-r  border-2 border-border  h-screen flex flex-col space-y-6  border-[#FE8302]",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function SideBarHeader({ className, children }: SideBarGenericProps) {
  return (
    <header
      className={cn(
        "p-5 py-1.5 border-b border-border border-[#FE8302]",
        className
      )}
    >
      {children}
    </header>
  );
}

export function SideBarHeaderMain({
  className,
  children,
}: SideBarGenericProps) {
  return <main className={cn("p-5 ", className)}>{children}</main>;
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
  return <nav className={cn("flex flex-col ", className)}>{children}</nav>;
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
        "flex items-center font-medium text-xs uppercase text-muted-foreground text-center",
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
        "  text-xs px-2 py-2 rounded-md flex items-center ",
        active && " text-md text-white bg-[#7e22ce]",
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
        "p-6 mt-auto border-t border-border  border-[#FE8302]",
        className
      )}
    >
      {children}
    </footer>
  );
}
