"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white shadow-lg">
      <nav className="container mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold tracking-tight">To Be Home</div>
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
                className="text-white border border-white bg-black"
              >
                Fazer login
              </Button>
              <Button variant="secondary" className="bg-black text-white">
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
              <div className="flex flex-col space-y-5 mt-3">
                <Button
                  variant="outline"
                  className="border-white text-white bg-black"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-black"
                >
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
