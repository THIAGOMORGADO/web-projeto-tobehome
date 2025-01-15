"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const routes = useRouter();
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white py-0 px-3 bg-gradient-to-b from-black/50 to-black/20">
      <div className="relative z-10 max-w-4xl mx-auto p-6 bg-black/50 rounded-lg text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          <span className="text-purple-700">
            Apple<span className="text-[#FE8302] ">T</span>rip
          </span>
        </h1>
        <div className="w-full text-center  flex items-center justify-center">
          <p className="text-xl md:text-1xl mb-8 drop-shadow-md w-[90%] sm:w-[70%] text-center my-10 my-10">
            Proprietários e corretores, entre em contato com nossa equipe e
            aproveite o suporte dos melhores profissionais do mercado. Estamos
            prontos para ajudar você a alcançar os melhores resultados!
          </p>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105"
          onClick={() => routes.push("/LandingPage/contacts")}
        >
          Entra em contato
        </Button>
      </div>
    </section>
  );
}
