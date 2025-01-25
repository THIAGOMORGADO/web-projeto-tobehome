"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/custom-input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { users } from "../mock/users";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import  TextInput  from "./forgotPassword/components/TextInput";

export function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    setError(null); // Reseta o erro inicial

    try {
      // Verificar se as credenciais correspondem a algum usuário mockado
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Chama o login do contexto com as informações do usuário
        login(user.name, user.email, user.role);
        console.log("Usuário encontrado:", user);

        // Lógica de redirecionamento baseada na role
        if (user.role === "corretor") {
          return router.push("/dashboard/corretor-dashboard");
        } else if (user.role === "proprietario") {
          router.push("/dashboard/proprietario-dashboard");
        } else if (user.role === "super_admin") {
          router.push("/dashboard/admin-dashboard");
        } else if (user.role === "user") {
          router.push("/dashboard");
        } else {
          throw new Error("Papel do usuário inválido.");
        }
      } else {
        // Lançar erro caso as credenciais sejam inválidas
        throw new Error("Credenciais inválidas.");
      }
    } catch (err: unknown) {
      console.error("Erro no login:", (err as Error).message);
      setError(
        "Não foi possível realizar o login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-purple-600 font-medium block">Email</label>
        <TextInput password={false} placeHolder="digite seu email"   className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"/>
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-purple-600 font-medium block">Senha</label>
        
        <TextInput
          placeHolder="Senha"
          
          password
          type="password"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md shadow-sm focus:outline-none sm:text-sm"
        />
        <div className="w-full ">
          <Link href="/signin/forgotPassword" className="flex items-end justify-end p-1  w-full text-[#7e22ce] hover:underline">Esqueceu a senha ?</Link>
        </div>
      </div>
      <Button
        type="submit"
        
        className="w-full bg-white border-2 text-purple-600 border-purple-700"
      >
        Sign In
      </Button>
    </form>
  );
}
