/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/custom-input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { users } from "../mock/users";

export function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Resetando o erro

    try {
      // Verificar as credenciais com os usuários mockados
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Chama o login do contexto
        // login(user.name, user.email, user.role);
        console.log(user);

        // Lógica de redirecionamento com base no papel do usuário
        if (
          user.role === "corretor" ||
          user.role === "proprietario" ||
          user.role === "user"
        ) {
          router.push("/dashboard"); // Para corretores ou proprietários
        } else if (user.role === "super_admin") {
          router.push("/dashboard"); // Para super admin
        } else {
          throw new Error("Invalid role");
        }
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      // Tratar erros e exibir mensagem de erro
      setError(
        "Failed to sign in. Please check your credentials and try again."
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
