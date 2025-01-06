import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">To Be Home</h3>
            <p className="text-gray-400">
              Oferecemos uma variedade de serviços para tornar sua estadia
              conosco inesquecível, desde acomodações luxuosas até experiências
              gastronômicas exclusivas.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul className="text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white">
                  Quartos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <p className="text-gray-400">Rua das nao sei, 123</p>
            <p className="text-gray-400">Sao paulo - SP</p>
            <p className="text-gray-400">Tel: (11) 9999-999</p>
            <p className="text-gray-400">Email: tobehome@tobehome.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/hotelparaiso"
                className="text-gray-400 hover:text-white"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/hotelparaiso"
                className="text-gray-400 hover:text-white"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.twitter.com/hotelparaiso"
                className="text-gray-400 hover:text-white"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          © 2023 To Be home. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
