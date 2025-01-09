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
      <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-col w-full">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700 ">
            RG
          </Label>
          <Input
            id="corretorInput"
            placeholder="Informe o seu RG"
            value={formData.rg}
            onChange={(e) => updateFormData({ rg: e.target.value })}
            className="mt-1 block w-full rounded-md text-purple-700 hover:text-purple-600 sm:text-sm"
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
            className="mt-1 block w-full rounded-md text-purple-700 hover:text-purple-600 sm:text-sm"
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
          className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full rounded-md text-purple-700 hover:text-purple-600 sm:text-sm"
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
                className="mt-1 block w-full rounded-md text-purple-700 hover:text-purple-600 sm:text-sm"
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
          className="mt-1 block w-full rounded-md text-purple-700 hover:text-purple-600 sm:text-sm"
        />
      </div>
    </div>
  );
}
