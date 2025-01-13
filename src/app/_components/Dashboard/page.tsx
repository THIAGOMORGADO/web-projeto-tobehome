"use client";
import { cn } from "@/lib/utils";

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardPage({
  className,
  children,
}: DashboardPageGenericProps) {
  return <section className={cn(["h-screen ", className])}>{children}</section>;
}

export function DashboardPageHeader({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        "px-6 py-1.5 h-12 border-b border-border border-[#FE8302] flex items-center justify-between bg-[#7e22ce]",
        className,
      ])}
    >
      {children}
    </header>
  );
}

export function DashboardPageHeaderTitle({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <span className={cn(["text-2xl font-bold uppercase", className, "pl-11 sm:pl-8"])}>
      {children}
    </span>
  );
}

export function DashboardPageHeaderNav({
  className,
  children,
}: DashboardPageGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function DashboardPageMain({
  className,
  children,
}: DashboardPageGenericProps) {
  return <main className={cn(["p-6", className])}>{children}</main>;
}
