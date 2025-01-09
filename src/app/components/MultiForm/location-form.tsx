/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { LocalizationApi } from "@/app/services/Localization";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEffect, useState } from "react";

interface LocationFormProps {
  formData: {
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    uf: string;
    country: string;
  };
  updateFormData: (data: Partial<LocationFormProps["formData"]>) => void;
}

export default function LocationForm({
  formData,
  updateFormData,
}: LocationFormProps) {
  const [county, setCounty] = useState([]);
  const [states, setState] = useState([]);
  const [uf, setUf] = useState([]);

  async function fetchData() {
    try {
      // Realiza as três requisições em paralelo
      const [countyResponse, stateResponse, ufResponse] = await Promise.all([
        LocalizationApi.get("/paises/76"),
        LocalizationApi.get("/regioes-imediatas"),
        LocalizationApi.get("/regioes-intermediarias"),
      ]);

      // Atualiza os estados com as respostas
      setCounty(countyResponse.data);
      setState(stateResponse.data);
      setUf(ufResponse.data.UF);

      console.log("Counties:", countyResponse.data);
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="">
        <div className="space-y-2">
          <Label
            htmlFor="country"
            className="text-sm font-medium text-gray-700"
          >
            País
          </Label>
          <select
            id="country"
            value={formData.country}
            onChange={(e) => updateFormData({ country: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Selecione um país</option>
            {county?.map((city: { id: string; nome: string }) => (
              <option key={city.nome} value={city.nome}>
                {city.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-col w-full">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            Cidade
          </Label>
          <select
            id="state"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
            className="mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[95%]"
          >
            <option value="">Selecione um país</option>
            {states?.map((states: { id: string; nome: string }) => (
              <option
                key={states.id}
                value={states.nome}
                className="bg-[#f9fafb] text-[#3b82f6] p-2.5 rounded-md mb-1.25 mt-1.25"
              >
                {states.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            UF
          </Label>
          <select
            value={formData.uf}
            onChange={(e) => updateFormData({ uf: e.target.value })}
            className="mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full bg-white text-gray-700"
          >
            <option value="">Selecione uma UF</option>
            {uf?.map((uf: { id: string; nome: string; sigla: string }) => (
              <option
                key={uf.id}
                value={uf.sigla}
                className="bg-[#f9fafb] text-[#3b82f6] p-2.5 rounded-md mb-1.25 mt-1.25"
              >
                {uf.sigla}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
