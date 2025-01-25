"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { users } from "../mock/users";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import TextInput from "./forgotPassword/components/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'sonner';

type LoginProps = {
  email: string;
  password: string;
};

const schemeLogin = yup.object({
  email: yup.string().required('Email é obrigatório.'),
  password: yup.string().required('Senha é obrigatória.').min(10, 'A senha deve ter pelo menos 10 caracteres.'),
});

export function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: yupResolver(schemeLogin),
  });
  const router = useRouter();
  const { user, login } = useAuth();

  const onSubmit = handleSubmit((data: LoginProps) => {
    try {
      // Verificar se as credenciais correspondem a algum usuário mockado
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        // Chama o login do contexto com as informações do usuário
        login(user.name, user.email, user.role);
        console.log("Usuário encontrado:", user);
        
        // Exibir um toast de sucesso
       
          if (user.role === "corretor") {
            toast.loading(`Bem-vindo, ${user.name}! Você será redirecionado em 3 minutos.`);
            router.push("/dashboard/corretor-dashboard");
          } else if (user.role === "proprietario") {
            router.push("/dashboard/proprietario-dashboard");
          } else if (user.role === "super_admin") {
            router.push("/dashboard/admin-dashboard");
          } else if (user.role === "user") {
            router.push("/dashboard");
          } else {
            throw new Error("Papel do usuário inválido.");
          }
        // 3 minutos em milissegundos
      } else {
        // Lançar erro caso as credenciais sejam inválidas
        throw new Error("Credenciais inválidas.");
      }
    } catch (err: unknown) {
      console.error("Erro no login:", (err as Error).message);
    }
  
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-purple-600 font-medium block">Email</label>
        <TextInput password={false} placeHolder="digite seu email" {...register('email')} className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"/>
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-purple-600 font-medium block">Senha</label>
        <TextInput
          placeHolder="Senha"
          {...register('password')}
          password
          type="password"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md shadow-sm focus:outline-none sm:text-sm"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        <div className="w-full ">
          <Link href="/signin/forgotPassword" className="flex items-end justify-end p-1  w-full text-[#7e22ce] hover:underline">Esqueceu a senha ?</Link>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
      >
        Sign In
      </Button>
    </form>
  );
}
