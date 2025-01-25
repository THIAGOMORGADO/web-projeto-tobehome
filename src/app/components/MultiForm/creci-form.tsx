import TextInput from "@/app/signin/forgotPassword/components/TextInput";

import { Label } from "@/components/ui/label";

interface CreciFormProps {
  register: any;
  errors: any;
 
}

const CreciForm: React.FC<CreciFormProps> = ({ register, errors, }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="rg" className="text-sm font-medium text-gray-700">
          RG
        </Label>
        <TextInput
          placeHolder="Informe seu RG"
          {...register('rg', { required: 'RG é obrigatório.' })}
          error={errors.rg}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
      <div className="space-y-2">
        <Label htmlFor="cpf" className="text-sm font-medium text-gray-700">
          CPF
        </Label>
        <TextInput
          placeHolder="Insira seu CPF"
          {...register('cpf', { required: 'CPF é obrigatório.' })}
          error={errors.cpf}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
      <div className="space-y-2">
        <Label htmlFor="birthDate" className="text-sm font-medium text-gray-700">
          Data de Nascimento
        </Label>
        <TextInput
          placeHolder="Informe sua data de nascimento"
          date
          {...register('birthDate', { required: 'Data de nascimento é obrigatória.' })}
          error={errors.birthDate}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
    </div>
  );
};

export default CreciForm;
