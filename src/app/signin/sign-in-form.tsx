/* eslint-disable @typescript-eslint/no-explicit-any */
 
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/custom-input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { users } from "../mock/users";
import { useAuth } from "@/context/AuthContext";

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
    } catch (err: any) {
      console.error("Erro no login:", err.message);
      setError(
        "Não foi possível realizar o login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Controlando o estado do email
          autoComplete="email"
          required
          placeholder="Email"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Controlando o estado da senha
          autoComplete="current-password"
          required
          placeholder="Senha"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button
        type="submit"
        className="w-full bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
      >
        Sign In
      </Button>
    </form>
  );
}
