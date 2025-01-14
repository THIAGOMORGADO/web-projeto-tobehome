/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
            Estado
          </Label>
          <Input
            id="country"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-col w-full ">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            Cidade
          </Label>
          <Input
            id="state"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium text-md mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[95%]"
          />
        </div>

        <div className="flex flex-col w-20 ">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            UF
          </Label>
          <Input
            value={formData.uf}
            maxLength={2}
            onChange={(e) => updateFormData({ uf: e.target.value })}
            className="h-8 bg-[#7e22ce] text-[#FE8302] px-2 font-medium text-md mt-1 block rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[95%] px-1"
          />
        </div>
      </div>
    </div>
  );
}
