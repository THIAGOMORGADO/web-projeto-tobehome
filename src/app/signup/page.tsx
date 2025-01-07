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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const routes = useRouter();

  function handleNextSteps() {
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
                  type="name"
                  id="name"
                  className=""
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Email"
                  placeholder="Digite seu email"
                  type="mail"
                  id="mail"
                  className=""
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Senha"
                  placeholder="Senha"
                  type="password"
                  id="pass"
                  className=""
                />
              </div>

              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de conta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Corretor</SelectItem>
                    <SelectItem value="dark">Proprietario</SelectItem>
                    <SelectItem value="dark">Usuario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
