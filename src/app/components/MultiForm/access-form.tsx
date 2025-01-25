import React from 'react';
import TextInput from "@/app/signin/forgotPassword/components/TextInput";
import { Label } from "@/components/ui/label";

interface AccessFormProps {
  register: any;
  errors: any;
  
}

const AccessForm: React.FC<AccessFormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome
        </Label>
        <TextInput
          type="text"
          placeHolder="Seu nome"
          user
          {...register('name', { required: 'Nome é obrigatório.' })}
          error={errors.name}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <TextInput
          type="email"
          placeHolder="seu@email.com"
          email
          {...register('email', { required: 'Email é obrigatório.' })}
          error={errors.email}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Senha
        </Label>
        <TextInput
          password
          placeHolder="Sua senha"
          {...register('password', { required: 'Senha é obrigatória.' })}
          error={errors.password}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
          Confirme a senha
        </Label>
        <TextInput
          password
          placeHolder="Confirme sua senha"
          {...register('confirmPassword', { required: 'Confirmação de senha é obrigatória.' })}
          error={errors.confirmPassword}
        />
        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
      </div>
    </div>
  );
};

export default AccessForm;
