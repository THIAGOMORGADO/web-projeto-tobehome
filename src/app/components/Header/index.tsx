"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#341A72] text-white shadow-sm">
      <nav className="container mx-auto sm:px-24 px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">To Be Home</div>
          <div className="hidden md:flex items-center justify-between flex-grow ml-6">
            <div className="flex items-center justify-center">
              <Link href="#" className="text-white hover:text-[#fff] mx-4">
                Início
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] mx-4">
                Imóveis
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] mx-4">
                Serviços
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] mx-4">
                Contato
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className=" text-[#341A72] border border-[#341A72]"
              >
                Fazer login
              </Button>
              <Button variant="secondary">Reservar Agora</Button>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} color="#fff" />
            ) : (
              <Menu size={24} color="#fff" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:text-[#fff] py-2">
                Início
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] py-2">
                Imóveis
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] py-2">
                Serviços
              </Link>
              <Link href="#" className="text-white hover:text-[#fff] py-2">
                Contato
              </Link>
              <div className="flex flex-col space-y-4 mt-2">
                <Button variant="outline" className="border-white text-black">
                  Login
                </Button>
                <Button variant="outline" className="border-white text-black">
                  Reservar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
