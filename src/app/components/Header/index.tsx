"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

import Logo from "@/app/assets/logo.jpg";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <header className="bg-[#030142] text-white shadow-lg">
      <nav className="container mx-auto sm:px-28 px-8 py-5">
        <div className="flex justify-between items-center gap-5">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="sm:h-15 sm:w-15 w-10 h-10"
            />
          </Link>
          <h4 className="text-lg font-semibold">To Be Home</h4>
          <div className="hidden md:flex items-center justify-between flex-grow ml-8">
            <div className="flex items-center justify-center space-x-8">
              <Link
                href="#"
                className="text-white hover:text-indigo-300 transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 transition-colors duration-200"
              >
                Imóveis
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 transition-colors duration-200"
              >
                Contato
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="outline"
                className="text-white bg-black border-0"
                onClick={handleSignIn}
              >
                Fazer login
              </Button>

              <Button
                variant="secondary"
                className="bg-black text-white border-0"
              >
                Reservar Agora
              </Button>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={28} color="#fff" />
            ) : (
              <Menu size={28} color="#fff" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-5">
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-white hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Imóveis
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                href="#"
                className="text-white hover:text-indigo-300 py-3 transition-colors duration-200"
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-3 mt-3">
                <Button
                  variant="outline"
                  className="border-0 text-white bg-black py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleSignIn}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="border-0 text-white bg-black py-2 px-4 rounded-lg hover:text-black transition-colors"
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
