'use client'

import React from 'react'
import TextInput from './components/TextInput'
import { toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import  ValidationRedefinationPassowrd, { schemaValidationEmail }  from '@/lib/Validations';
import { Button } from '@/components/ui/button';

type FormData = {
  email: string
}



export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>(
    { resolver: yupResolver(schemaValidationEmail) }
  );
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const validation = await ValidationRedefinationPassowrd(data.email);
    
      if (validation) {
        toast.success('Link de recuperação enviado com sucesso!', {
          description: 'Verifique seu email para redefinir sua senha',
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
          },
        });
      } else {
        toast.error('Email não encontrado. Verifique se você digitou corretamente.');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao validar o email.');
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
            <label htmlFor="email" className="text-purple-600 font-medium block">Email:</label>
            <TextInput email  placeHolder='Digite o email' {...register('email')} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>} {/* Display error message if exists */}
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Enviar link de recuperação
          </Button>
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
