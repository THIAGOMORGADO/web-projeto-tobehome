/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

import { useForm, useFormContext } from "react-hook-form";

export default function SignUp2() {
  const { register } = useForm();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#030142]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              <div className="flex flex-row justify-between">
                <p>Cadastro de Cliente,</p>
              </div>
            </CardTitle>
            <CardDescription>
              Informe os seu dados de localização
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("rua")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="">Numero</label>
                <input
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("numero")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="">Bairro</label>
                <input
                  type="text"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("bairro")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="">Cidade</label>
                <input
                  type="text"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("cidade")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="">Estado</label>
                <input
                  type="text"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("estado")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="">CEP</label>
                <input
                  type="text"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("cep")}
                />
              </div>

              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Próximo
              </Button>
            </form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </div>
    </>
  );
}
