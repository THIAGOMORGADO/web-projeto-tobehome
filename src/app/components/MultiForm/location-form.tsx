/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { LocalizationApi } from "@/app/services/Localization";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEffect, useState } from "react";

interface LocationFormProps {
  formData: {
    address: any;
    neighborhood: any;
    city: any;
    state: any;
    zipCode: any;
    uf: any;
  };
  updateFormData: (data: Partial<LocationFormProps["formData"]>) => void;
}

export default function LocationForm({
  formData,
  updateFormData,
}: LocationFormProps) {
  const [states, setState] = useState([]);
  const [uf, setUf] = useState([]);

  async function fetchData() {
    try {
      // Realiza as três requisições em paralelo
      const [stateResponse, ufResponse] = await Promise.all([
        LocalizationApi.get("/regioes-imediatas"),
        LocalizationApi.get("/regioes-intermediarias"),
      ]);

      // Atualiza os estados com as respostas

      setState(stateResponse.data as any);
      setUf(ufResponse.data as any);
      console.log("States:", stateResponse.data);
      console.log("UFs:", ufResponse.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Endereço
        </Label>
        <Input
          id="address"
          placeholder="Rua, número,"
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          className=" bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Bairro
        </Label>
        <Input
          id="address"
          placeholder="número, bairro"
          value={formData.neighborhood}
          onChange={(e) => updateFormData({ neighborhood: e.target.value })}
          className=" bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          CEP
        </Label>
        <Input
          id="address"
          placeholder="CEP"
          value={formData.zipCode}
          onChange={(e) => updateFormData({ zipCode: e.target.value })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>

      <div className="">
        <div className="space-y-2">
          <Label
            htmlFor="country"
            className="text-sm font-medium text-gray-700"
          >
            Selecione o estado
          </Label>
          <select
            id="country"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Selecione o estado</option>
            {states?.map((states: { id: any; nome: any }) => (
              <option key={states.id} value={states.nome}>
                {states.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-col w-full ">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            Cidade
          </Label>
          <select
            id="state"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium text-md mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[95%]"
          >
            <option value="" className="text-[#FE8302]">
              Selecione um Cidade
            </option>
            {states?.map((city: { id: any; nome: any }) => (
              <option
                key={city.id}
                value={city.nome}
                className="bg-[#7e22ce] text-[#FE8302] hover:none p-2.5 rounded-md mb-1.25 mt-1.25 text-[#]"
              >
                {city.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-20 ">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            UF
          </Label>
          <select
            value={formData.uf}
            onChange={(e) => updateFormData({ uf: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium text-md mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[95%] px-1"
          >
            <option value="" className="bg-[#7e22ce] text-[#FE8302]">
              UF
            </option>
            {uf?.map((uf: { id: any; nome: any; UF: any; sigla: any }) => (
              <option
                key={uf.id}
                value={uf.sigla}
                className="bg-[#7e22ce] text-[#FE8302] p-2.5 rounded-md mb-1.25 mt-1.25"
              >
                {uf.UF.sigla}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
