import { Button } from "@/components/ui/button";

import Carrouse1 from "@/app/assets/carrousel1.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white py-0 px-3 bg-gradient-to-b from-black/50 to-black/20">
      <Image
        src={Carrouse1}
        alt="Background image of the hotel"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-4xl mx-auto p-6 bg-black/50 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bem-vindo ao To Be Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Corretor cadastre seu imóvel de temporada
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105"
        >
          Cadastre-se
        </Button>
      </div>
    </section>
  );
}
