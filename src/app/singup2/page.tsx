"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TextInput } from "../_components/Input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#030142] ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Cadastro dos dados pessoais
          </h1>
          <p className="text-lg text-gray-400">
            Preencha os campos abaixo para completar o cadastro.
          </p>
        </div>

        <Card className="w-full max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-3xl mx-auto mt-10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para se cadastrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-4">
                <TextInput
                  label="Endereço"
                  placeholder="Ex: Rua, Número, Bairro, Cidade, Estado"
                  type="text"
                  id="address"
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <TextInput
                  label="RG"
                  placeholder="Ex: 12.345.678-9"
                  type="text"
                  id="rg"
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <TextInput
                  label="CPF"
                  placeholder="Ex: 123.456.789-10"
                  type="text"
                  id="cpf"
                  className="w-full"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Próximo
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
