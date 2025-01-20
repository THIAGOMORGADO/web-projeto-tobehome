/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  DashboardPage,
  DashboardPageMain,
} from "@/app/components/dashboard/dashboard";
import { DashboardPageHeader } from "@/app/components/dashboard/dashboard";
import React, { useState } from "react";

import Casa01 from "@/app/assets/casa01.jpg";
import Casa02 from "@/app/assets/casa02.jpg";
import Casa03 from "@/app/assets/casa03.jpg";
import Casa04 from "@/app/dashboard/corretor-dashboard/components/Svgs/assets/events.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { amenitiesData } from "@/app/mock/proppety";

export default function Page() {
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const [productId, setProductId] = useState<string>("12345"); // Exemplo de ID de produto
  const [selectedAmenities, setSelectedAmenities] = useState<any>({}); // Estado para armazenar as seleções de amenities

  const handleSelection = (propertyId: string) => {
    setSelectedProperty(propertyId);
  };

  // Função para atualizar os valores selecionados nas amenidades
  const handleSelectChange = (label: string, value: string) => {
    setSelectedAmenities((prev: any) => ({
      ...prev,
      [label]: value, // Atualiza o valor da amenidade com base no label
    }));
  };

  // Função para o submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Coletando os dados do formulário
    const formData = {
      productId, // ID do produto
      property: selectedProperty, // Tipo de imóvel selecionado
      amenities: selectedAmenities, // Amenidades selecionadas (valores dos selects)
    };

    console.log("Dados do Formulário:", formData);

    // Aqui você pode enviar o formData para a API ou processar conforme necessário
  };

  return (
    <DashboardPage>
      <DashboardPageHeader className="">
        <h1>Cadastrar um novo imóvel</h1>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="">Aqui entra o cadastro do conteúdo</div>

        <main>
          <form onSubmit={handleSubmit}>
            {/* Seção de seleção de imóvel */}
            <div className="sm:flex sm:flex-row gap-5">
              {/* Casa */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="property"
                  checked={selectedProperty === "casa"}
                  onChange={() => handleSelection("casa")}
                />
                <Image src={Casa02} alt="Casa" className="w-10 h-10" />
                <div>
                  <h1>Casa</h1>
                  <p>Usar também para bangalô, cabana, casa de campo, chalé.</p>
                </div>
              </div>

              {/* Apartamento */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="property"
                  checked={selectedProperty === "apartamento"}
                  onChange={() => handleSelection("apartamento")}
                />
                <Image src={Casa01} alt="Apartamento" className="w-10 h-10" />
                <div>
                  <h1>Apartamento</h1>
                  <p>Usar também para flats, coberturas.</p>
                </div>
              </div>

              {/* Chácara */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="property"
                  checked={selectedProperty === "chacara"}
                  onChange={() => handleSelection("chacara")}
                />
                <Image src={Casa03} alt="Chácara" className="w-10 h-10" />
                <div>
                  <h1>Chácara</h1>
                  <p>Usar também para fazendas, camping, etc.</p>
                </div>
              </div>

              {/* Festa / Eventos */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="property"
                  checked={selectedProperty === "eventos"}
                  onChange={() => handleSelection("eventos")}
                />
                <Image src={Casa04} alt="Eventos" className="w-10 h-10" />
                <div>
                  <h1>Festa / Eventos</h1>
                  <p>Área para cadastrar imóveis para eventos e festas.</p>
                </div>
              </div>
            </div>

            {/* Área de checkbox */}
            <div className="mt-10 border-boder border-[1px] rounded-md">
              <div className="p-6 bg-white rounded-lg">
                <h2 className="text-xl font-semibold mb-6">
                  2. Características básicas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {amenitiesData.map(
                    ({ label, icon, defaultValue, options }) => (
                      <div className="flex items-center gap-3" key={label}>
                        {icon}
                        <div className="flex-1">
                          <label className="block text-sm mb-1.5">
                            {label}
                          </label>
                          <Select
                            value={selectedAmenities[label] || defaultValue}
                            onValueChange={(value) =>
                              handleSelectChange(label, value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Botão de Submit */}
            <Button type="submit">Enviar</Button>
          </form>
        </main>
      </DashboardPageMain>
    </DashboardPage>
  );
}
