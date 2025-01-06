import React from "react";
import Link from "next/link"; // Corrected import statement
import { Button } from "@/components/ui/button";
// Removed Button import as 'shadcn-ui' is not found

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <div className="logo text-2xl font-bold transition-transform transform hover:scale-105">
        MyApp
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <Button className="menu-toggle p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
          <span className="bar block w-6 h-0.5 bg-white mb-1"></span>
          <span className="bar block w-6 h-0.5 bg-white mb-1"></span>
          <span className="bar block w-6 h-0.5 bg-white"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
