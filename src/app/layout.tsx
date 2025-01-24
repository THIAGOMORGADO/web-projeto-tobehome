import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import {
  ClerkProvider,

} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <AuthProvider>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased ",
              `${geistSans.variable} ${geistMono.variable} antialiased`
            )}
            suppressHydrationWarning={true}
          >
            {children}
            <Toaster />
          </body>
        </AuthProvider>
      </ClerkProvider>
    </html>
  );
}
