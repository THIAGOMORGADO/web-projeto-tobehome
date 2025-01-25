import TextInput from "@/app/signin/forgotPassword/components/TextInput";

interface CreciFormProps {
  register: any;
  errors: any;
 
}

const CreciForm: React.FC<CreciFormProps> = ({ register, errors, }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="rg" className="text-purple-600 font-medium block">
          RG
        </label>
        <TextInput
          placeHolder="Informe seu RG"
          {...register('rg' )}
          error={errors.rg}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
      <div className="space-y-2">
        <label htmlFor="cpf" className="text-purple-600 font-medium block">
          CPF
        </label>
        <TextInput
          placeHolder="Insira seu CPF"
          {...register('cpf')}
          error={errors.cpf}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
      <div className="space-y-2">
        <label htmlFor="birthDate" className="text-purple-600 font-medium block">
          Data de Nascimento
        </label>
        <TextInput
          placeHolder="Informe sua data de nascimento"
          date
          {...register('birthDate')}
          error={errors.birthDate}
          className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
        
      </div>
    </div>
  );
};

export default CreciForm;
