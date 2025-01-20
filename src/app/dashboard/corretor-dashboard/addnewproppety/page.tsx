"use client";
import {
  DashboardPage,
  DashboardPageMain,
} from "@/app/components/dashboard/dashboard";
import { DashboardPageHeader } from "@/app/components/dashboard/dashboard";
import React from "react";

import Casa01 from "@/app/assets/casa01.jpg";
import Casa02 from "@/app/assets/casa02.jpg";
import Casa03 from "@/app/assets/casa03.jpg";
import Image from "next/image";

import PropertyAmenities from "../components/CheckBox";

export default function page() {
  return (
    <DashboardPage>
      <DashboardPageHeader className="">
        <h1>Cadastra um novo imovel</h1>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="">Aqui entra o cadastro do conteudo</div>

        <main>
          <form>
            {/* Checkbox  */}

            <div className="sm:flex sm:flex-row justify-center gap-2 w-[80%]">
              <div className="flex items-center">
                <input type="radio" />
                <Image src={Casa02} alt="casa01" className="w-10h-10" />
                <div className="">
                  <h1>Casa</h1>
                  <p>usar também para bangalô, cabana, casa de campo, chalé</p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <input type="radio" />
                  <Image src={Casa01} alt="casa01" className="w-10h-10" />
                  <div className="">
                    <h1>Casa</h1>
                    <p>
                      usar também para bangalô, cabana, casa de campo, chalé
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <Image src={Casa03} alt="casa01" className="w-10h-10" />
                  <div className="">
                    <h1>Casa</h1>
                    <p>
                      usar também para bangalô, cabana, casa de campo, chalé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area de input */}

            <div className="mt-10 border-boder border-[1px] rounded-md">
              <PropertyAmenities />
            </div>
          </form>
        </main>
      </DashboardPageMain>
    </DashboardPage>
  );
}
