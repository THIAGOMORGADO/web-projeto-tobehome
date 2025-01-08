import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationFormProps {
  formData: {
    address: string;
    city: string;
    country: string;
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
          placeholder="Rua, número, bairro"
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="city" className="text-sm font-medium text-gray-700">
          Cidade
        </Label>
        <Input
          id="city"
          placeholder="Sua cidade"
          value={formData.city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm font-medium text-gray-700">
          País
        </Label>
        <Input
          id="country"
          placeholder="Seu país"
          value={formData.country}
          onChange={(e) => updateFormData({ country: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
