"use client";

import { CircleCheck } from "lucide-react";

import React, { useEffect, useState } from "react";

import House from "@/app/assets/svg/house-svgrepo-com.svg";
import Building from "@/app/assets/svg/building-2-svgrepo-com.svg";
import ProductItem from "./Item";

export default function FormProducts() {
  const [isAlert, setIsAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAlert(false);
    }, 3000);
  }, [isAlert]);

  return (
    <div className="">
      <p>Novo produto.</p>

      <h1>Nome do corretor, Cadastre o imovel...</h1>

      {/* {isAlert ? ( */}
      <div className="mt-4 border-purple-500 border-2 p-10 flex items-center gap-4 rounded-md">
        <CircleCheck className="w-16 h-16 text-purple-500" />
        <h1>
          Todos os item poderam ser editados a qual quer momento dentro no seu
          painel de produtos
        </h1>
      </div>
      {/* ) : null} */}

      <section className="mt-3 w-full sm:flex sm:flex-col p-5">
        <div className="mb-3">
          <h3 className="font-bold text-2xl">1. Tipo de imóvel</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <ProductItem
            productSrc={House}
            productTitle="Casa"
            productsDescription="Usar também para bangalô, cabana, casa de campo, chalé, sítio e
                pousada"
          />

          <ProductItem
            productSrc={Building}
            productTitle="Casa"
            productsDescription="Usar também para bangalô, cabana, casa de campo, chalé, sítio e
                pousada"
          />
          <ProductItem
            productSrc={Building}
            productTitle="Casa"
            productsDescription="Usar também para bangalô, cabana, casa de campo, chalé, sítio e
                pousada"
          />
        </div>
      </section>
    </div>
  );
}
