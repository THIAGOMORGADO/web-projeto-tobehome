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
import SelectInput from "../components/SelectInput";

import icon from "../components/Svgs/";

export default function page() {
  const handleOptionChange = (value: number) => {
    console.log("Opção selecionada:", value);
  };
  return (
    <DashboardPage>
      <DashboardPageHeader className="">
        <div className="">
          <h1>Cadastra um novo imovel</h1>
        </div>
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
              <div className="border-border p-2 bg-slate-200 font-bold">
                Caracteriscas basicas
              </div>

              <div className="sm:flex sm:flex-row w-full  gap-2 ">
                <SelectInput
                  srcUrl={icon.PessoaIcon}
                  title="Pessoas"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={icon.BAthSuit}
                  title="Quarto (Incl. Suites)"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={icon.Suite}
                  title="Suites"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={icon.banheiroSuite}
                  title="Banheiro (Incl suites)"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
              </div>
              <div className="sm:flex sm:flex-row">
                <SelectInput
                  srcUrl={icon.BAthSuit}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
              </div>
              <div className="sm:flex sm:flex-row">
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
              </div>
              <div className="sm:flex sm:flex-row">
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
                <SelectInput
                  srcUrl={Casa02}
                  title="Escolha um número"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  onOptionChange={handleOptionChange}
                />
              </div>
            </div>
          </form>
        </main>
      </DashboardPageMain>
    </DashboardPage>
  );
}
