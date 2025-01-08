import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AccessFormProps {
  formData: {
    name: string;
    email: string;
    password: string;
    confirm: string;
  };
  updateFormData: (data: Partial<AccessFormProps["formData"]>) => void;
}

export default function AccessForm({
  formData,
  updateFormData,
}: AccessFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Senha
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Sua senha"
          value={formData.password}
          onChange={(e) => updateFormData({ password: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm" className="text-sm font-medium text-gray-700">
          Confirmar Senha
        </Label>
        <Input
          id="confirm"
          type="password"
          placeholder="Confirmar senha"
          value={formData.confirm}
          onChange={(e) => updateFormData({ confirm: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
