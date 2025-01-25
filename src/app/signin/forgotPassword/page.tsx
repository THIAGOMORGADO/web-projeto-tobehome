'use client'

import React from 'react'
import TextInput from './components/TextInput'
import { toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
  email: string
}

const schemaValidationEmail = yup.object().shape({
  email: yup.string().email('Por favor, insira um email válido.').required('O email é obrigatório.'),
});

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>(
    { resolver: yupResolver(schemaValidationEmail) }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const mockUsers = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
    ];

    if (!data.email) {
      toast.error('Por favor, insira um email antes de enviar.');
      return; // Exit the function if email is not provided
    }

    const user = mockUsers.find(user => user.email === data.email);

    if (user) {
      // Simulate sending a password reset email
      toast.success('Link de recuperação enviado com sucesso!', {
        description: `Verifique seu email para redefinir sua senha, ${data.email}`,
        duration: 5000,
        position: 'top-right',
        style: {
          backgroundColor: '#22c55e',
          color: 'white',
          borderRadius: '0.5rem',
          padding: '1rem',
          boxShadow: 'lg',
          fontSize: '0.875rem',
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          border: 'none'
        },

        

      });
      console.log("Redefinicao de senha esta ok")

    } else {
      toast.error('Email não encontrado. Verifique se você digitou corretamente.');
    }

    // Uncomment the following code to enable API call for password reset
    /*
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
        return;
      }

      toast.success('Email de redefinição de senha enviado com sucesso!');
    } catch (error: any) {
      toast.error('Ocorreu um erro ao enviar o link de recuperação', error);
    }
    */
  };

  return (
    <div className='bg-gradient-to-br from-purple-600 to-purple-900 w-screen h-screen flex items-center justify-center'>
      <div className="bg-white shadow-xl border-border border-[1px] border-zinc-200 p-8 rounded-lg max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-2">Esqueceu sua senha?</h1>
          <p className="text-gray-600 text-sm">Não se preocupe! Digite seu email abaixo e enviaremos instruções para recuperar sua senha.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium block">Email:</label>
            <TextInput  placeHolder='Digite o email' {...register('email')} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>} {/* Display error message if exists */}
          </div>
          
          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Enviar link de recuperação
          </button>
          <div className="text-center">
            <a href="/signin" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">
              Voltar para o login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
