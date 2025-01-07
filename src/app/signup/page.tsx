"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { TextInput } from "../_components/Input";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAccountType, setSelectedAccountType] = useState<string>("");
  const [creci, setCreci] = useState("");

  const routes = useRouter();

  const handleAccountTypeChange = (value: string) => {
    setSelectedAccountType(value);
  };

  function handleNextSteps() {
    if (!name || !email || !password || !selectedAccountType) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    if (selectedAccountType === "corretor" && !creci) {
      alert("O campo CRECI é obrigatório para corretores.");
      return;
    }

    // Simulate a registration process
    // This is a placeholder for actual registration logic
    console.log(
      `Registering user: ${name}, Email: ${email}, Password: ${password}, Account Type: ${selectedAccountType}`
    );
    alert(`Quase finalizando!!`);

    // Redirect to the next step
    routes.push("/singup2");
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#030142]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para se cadastrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <TextInput
                  label="Nome"
                  placeholder="Nome"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Email"
                  placeholder="Digite seu email"
                  type="email"
                  id="mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Senha"
                  placeholder="Senha"
                  type="password"
                  id="password"
                  className=""
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="space-y-2">
                <select
                  value={selectedAccountType}
                  onChange={(e) => handleAccountTypeChange(e.target.value)}
                  className="form-select block w-full mt-1 border-zinc-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                >
                  <option value="" disabled className="text-gray-600">
                    Selecione o tipo de conta
                  </option>
                  <option value="corretor" className="text-gray-800">
                    Corretor
                  </option>
                  <option value="proprietario" className="text-gray-800">
                    Proprietario
                  </option>
                  <option value="usuario" className="text-gray-800">
                    Usuário
                  </option>
                </select>
              </div>

              {selectedAccountType == "corretor" ? (
                <div className="space-y-4">
                  <TextInput
                    label="CRECI"
                    placeholder="Ex: 123456"
                    type="text"
                    id="creci"
                    className="w-full"
                    onChange={(e) => setCreci(e.target.value)}
                    value={creci}
                  />
                </div>
              ) : null}
            </form>
          </CardContent>

          <CardFooter>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleNextSteps}
            >
              Próximo
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
