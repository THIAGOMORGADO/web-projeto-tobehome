/* eslint-disable @typescript-eslint/no-explicit-any */
 
"use client";

import TextInput from "@/app/signin/forgotPassword/components/TextInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationFormProps {
  register: any;
  errors: any;
  
}

const LocationForm: React.FC<LocationFormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Endereço
        </Label>
        <TextInput
          placeHolder="Rua, número,"
          {...register('address', { required: 'Endereço é obrigatório.' })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="neighborhood" className="text-sm font-medium text-gray-700">
          Bairro
        </Label>
        <TextInput
          placeHolder="Bairro"
          {...register('neighborhood', { required: 'Bairro é obrigatório.' })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.neighborhood && <span className="text-red-500">{errors.neighborhood.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="city" className="text-sm font-medium text-gray-700">
          Cidade
        </Label>
        <TextInput
          placeHolder="Cidade"
          {...register('city', { required: 'Cidade é obrigatória.' })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.city && <span className="text-red-500">{errors.city.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="state" className="text-sm font-medium text-gray-700">
          Estado
        </Label>
        <TextInput
          placeHolder="Estado"
          {...register('state', { required: 'Estado é obrigatório.' })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.state && <span className="text-red-500">{errors.state.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
          CEP
        </Label>
        <TextInput
          placeHolder="CEP"
          {...register('zipCode', { required: 'CEP é obrigatório.' })}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
      </div>
    </div>
  );
};

export default LocationForm;
