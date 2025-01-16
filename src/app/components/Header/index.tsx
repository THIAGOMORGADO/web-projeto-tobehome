"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

import Logo from "@/app/assets/logo.jpg";
import Image from "next/image";
import DropMenuUser from "@/app/_components/DrawerUser";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <header className="bg-[#fff] text-black shadow-lg">
      <nav className="container mx-auto sm:px-28 px-8 py-2">
        <div className="flex justify-between  items-center px-5 ">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="sm:h-15 sm:w-15 w-10 h-10"
              />
            </Link>
            <h4 className="text-lg font-semibold text-black text-xl text-[#000]">
              Apple <span className="text-[#FE8302] ">T</span>rip
            </h4>
          </div>

          {/* Menu Central */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-black hover:text-indigo-300 transition-colors duration-200"
            >
              Início
            </Link>
            <Link
              href="#"
              className="text-black hover:text-indigo-300 transition-colors duration-200"
            >
              Imóveis
            </Link>
            <Link
              href="#"
              className="text-black hover:text-indigo-300 transition-colors duration-200"
            >
              Serviços
            </Link>
            <Link
              href="/LandingPage/newJobs"
              className="text-black hover:text-indigo-300 transition-colors duration-200"
            >
              Trabalhar Conosco
            </Link>
            <Link
              href="#"
              className="text-black hover:text-indigo-300 transition-colors duration-200"
            >
              Contato
            </Link>
          </div>

          {/* DropMenuUser */}
          <div className="flex items-center space-x-6">
            <DropMenuUser />
            {/* Botão para Mobile */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X size={28} color="#000" />
              ) : (
                <Menu size={28} color="#000" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-5">
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-black hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-black hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Imóveis
              </Link>
              <Link
                href="#"
                className="text-black hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                href="/LandingPage/newJobs"
                className="text-black hover:text-indigo-300 transition-colors duration-200"
              >
                Trabalhar Conosco
              </Link>
              <Link
                href="#"
                className="text-black hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-3 mt-3">
                <Button
                  variant="outline"
                  className="border-0 text-[#fff] bg-black py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleSignIn}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="border-0 text-[#fff] bg-black py-2 px-4 rounded-lg hover:text-black transition-colors"
                >
                  Reserve Sua Estadia
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
