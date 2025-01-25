/* eslint-disable @typescript-eslint/no-explicit-any */
 
"use client";

import TextInput from "@/app/signin/forgotPassword/components/TextInput";
interface LocationFormProps {
  register: any;
  errors: any;
  
}

const LocationForm: React.FC<LocationFormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="address" className="text-purple-600 font-medium block">
          Endereço
        </label>
        <TextInput
          placeHolder="Rua, número,"
          {...register('address')}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="neighborhood" className="text-purple-600 font-medium block">
          Bairro
        </label>
        <TextInput
          placeHolder="Bairro"
          {...register('neighborhood')}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.neighborhood && <span className="text-red-500">{errors.neighborhood.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="city" className="text-purple-600 font-medium block">
          Cidade
        </label>
        <TextInput
          placeHolder="Cidade"
          {...register('city', )}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.city && <span className="text-red-500">{errors.city.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="state" className="text-purple-600 font-medium block">
          Estado
        </label>
        <TextInput
          placeHolder="Estado"
          {...register('state' )}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.state && <span className="text-red-500">{errors.state.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="zipCode" className="text-purple-600 font-medium block">
          CEP
        </label>
        <TextInput
          placeHolder="CEP"
          {...register('zipCode',)}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
      </div>
    </div>
  );
};

export default LocationForm;
