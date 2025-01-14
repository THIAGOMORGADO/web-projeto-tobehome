import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationFormProps {
  formData: {
    rg: string;
    cpf: string;
    birthDate: string;
  };
  updateFormData: (data: Partial<LocationFormProps["formData"]>) => void;
}

export default function LocationForm({
  formData,
  updateFormData,
}: LocationFormProps) {
  return (
    <div className="space-y-4">
      <div className=" flex flex-row items-center justify-between gap-2">
        <div className="flex flex-col w-full">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            RG
          </Label>
          <Input
            id="corretorInput"
            placeholder="Informe o seu RG"
            value={formData.rg}
            onChange={(e) => updateFormData({ rg: e.target.value })}
            className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            CpF
          </Label>
          <Input
            id="corretorInput"
            placeholder="Insira seu CPF"
            value={formData.cpf}
            onChange={(e) => updateFormData({ cpf: e.target.value })}
            className="bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
          Data de nascimento
        </Label>
        <Input
          type="text"
          id="corretorInput"
          placeholder="Informe sua data de nascimento"
          value={formData.birthDate}
          onChange={(e) => updateFormData({ birthDate: e.target.value })}
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
    </div>
  );
}
