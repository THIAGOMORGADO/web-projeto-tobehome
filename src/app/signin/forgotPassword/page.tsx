'use client'

import React from 'react'
import TextInput from './components/TextInput'
import { toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormData = {
  email: string
}

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const routes = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o link de recuperação');
    }
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
            <TextInput placeHolder='Digite o email' {...register('email', { required: true })} />
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
