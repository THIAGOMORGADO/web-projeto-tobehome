'use client'

import React, { useState } from 'react'
import TextInput from './components/TextInput'
import { Toast } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


type FormData = {
  email: string
}


export default function page() {
  const { register, handleSubmit} = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    const existingEmails = ['example1@example.com', 'example2@example.com', 'example3@example.com'];

    if (!existingEmails.includes(data.email)) {
      toast.error('Este email não existe na nossa base de dados!', {
        description: 'Por favor, verifique o email informado.',
        duration: 5000,
        position: 'top-right',
        style: {
          color: '#9333ea', 
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
      return;
    }


    try {
      console.log('Email:', data.email);
      
      if (!data.email) {
        toast.error('Preencha o Campo Abaixo!', {
          description: 'Precisamos que informe o email',
          duration: 5000,
          position: 'top-right',
          style: {
            color: '#9333ea', 
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
        return;
      }

      toast.success('Link de recuperação enviado com sucesso!', {
        description: `Verifique seu email para redefinir sua senha, ${data.email}`,
        duration: 5000,
        position: 'top-right',
        style: {
          color: '#9333ea',
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
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o link de recuperação', {
        description: 'Por favor, tente novamente mais tarde',
        duration: 5000,
        position: 'top-right',
        style: {
          backgroundColor: '#ef4444',
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
    }
  })



  return (
    <div className='bg-gradient-to-br from-purple-600 to-purple-900 w-screen h-screen flex items-center justify-center'>
      <div className="bg-white shadow-xl border-border border-[1px] border-zinc-200 p-8 rounded-lg max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-2">Esqueceu sua senha?</h1>
          <p className="text-gray-600 text-sm">Não se preocupe! Digite seu email abaixo e enviaremos instruções para recuperar sua senha.</p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium block">Email:</label>
            <TextInput placeHolder='Digite o email' {...register('email')}/>
              
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
