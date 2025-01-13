import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

interface LocationFormProps {
  formData: {
    address: string;
    city: string;
    provider: "corretor" | "Proprietario" | "Usuario";
    creci?: string;
    rg: string;
    cpf: string;
    cnpj: string;
    birthDate: string;
  };
  updateFormData: (data: Partial<LocationFormProps["formData"]>) => void;
}

export default function LocationForm({
  formData,
  updateFormData,
}: LocationFormProps) {
  const [selectedProvider, setSelectedProvider] = useState(formData.provider);

  useEffect(() => {
    setSelectedProvider(formData.provider);
  }, [formData.provider]);

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

      <div className="space-y-2">
        <Label htmlFor="provider" className="text-sm font-medium text-gray-700">
          Tipo de Conta
        </Label>
        <select
          id="provider"
          value={formData.provider || ""}
          onChange={(e) =>
            updateFormData({
              provider: e.target
                .value as LocationFormProps["formData"]["provider"],
            })
          }
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        >
          <option value="">Selecione o tipo de conta</option>
          <option value="corretor">Corretor</option>
          <option value="Proprietario">Proprietário</option>
          <option value="Usuario">Usuário</option>
        </select>

        {selectedProvider === "corretor" ? (
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label
                htmlFor="creciInput"
                className="text-sm font-medium text-gray-700"
              >
                CRECI
              </Label>
              <Input
                id="creciInput"
                placeholder="Insira seu CRECI"
                value={formData.creci}
                onChange={(e) => updateFormData({ creci: e.target.value })}
                className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="cnpjInput"
                className="text-sm font-medium text-gray-700"
              >
                CNPJ
              </Label>
              <Input
                id="cnpjInput"
                placeholder="Insira seu CNPJ"
                value={formData.cnpj}
                onChange={(e) => updateFormData({ cnpj: e.target.value })}
                className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
          Data de nascimento
        </Label>
        <Input
          type="date"
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
