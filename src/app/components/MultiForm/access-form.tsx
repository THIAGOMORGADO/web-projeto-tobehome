import React from 'react';
import TextInput from "@/app/signin/forgotPassword/components/TextInput";


interface AccessFormProps {
  register: any;
  errors: any;
  
}

const AccessForm: React.FC<AccessFormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-purple-600 font-medium block">
          Nome
        </label>
        <TextInput
          type="text"
          placeHolder="Seu nome"
          user
          {...register('name')}
          error={errors.name}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-purple-600 font-medium block">
          Email
        </label>
        <TextInput
          type="email"
          placeHolder="seu@email.com"
          email
          {...register('email')}
          error={errors.email}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-purple-600 font-medium block">
          Senha
        </label>
        <TextInput
          password
          placeHolder="Sua senha"
          {...register('password')}
          error={errors.password}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-purple-600 font-medium block">
          Confirme a senha
        </label>
        <TextInput
          password
          placeHolder="Confirme sua senha"
          {...register('confirmPassword')}
          error={errors.confirmPassword}
        />
        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
      </div>
    </div>
  );
};

export default AccessForm;
