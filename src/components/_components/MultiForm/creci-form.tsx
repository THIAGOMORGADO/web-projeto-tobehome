import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

interface LocationFormProps {
  formData: {
    address: string;
    city: string;
    provider: "corretor" | "Proprietario" | "Usuario";
    creci?: string;
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

        {selectedProvider === "corretor" && (
          <div className="space-y-2 mt-4">
            <Label
              htmlFor="corretorInput"
              className="text-sm font-medium text-gray-700"
            >
              CRECI
            </Label>
            <Input
              id="corretorInput"
              placeholder="Insira seu CRECI"
              value={formData.creci}
              onChange={(e) => updateFormData({ creci: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
