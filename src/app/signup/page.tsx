/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../types/UserType";
//import { useRouter } from "next/navigation";
import { useFormContext, FormActions } from "@/app/context/FormContext";
//import { DialogDescription } from "@radix-ui/react-dialog";

export default function SignUp() {
  const { register, handleSubmit, watch } = useForm<User>();
  const { state, dispatch } = useFormContext();
  // const routes = useRouter();

  const corretorSelected = watch("provider") === "corretor";

  console.log(corretorSelected);

  // primeiro vc captura os dados!
  //depois que vc TEM os dados... a funcao de submit que significa enviar leva os dados que vc JA TEM

  const nome = watch("name");
  const email = watch("mail");
  const senha = watch("password");
  const creci = watch("creci");

  const newData = {
    nome,
    email,
    senha,
    provider: watch("provider"),
    creci,
  };

  console.log(newData);

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log("isso aqui foi trzido do data", data);

    dispatch({ type: FormActions.setName, payload: data.name });

    console.log("Aqui e valor do state do contexto", state);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#030142]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Criar Conta,</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para se cadastrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label htmlFor="">Nome</label>
                <input
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("name")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="">Email</label>
                <input
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("mail")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="">Senha</label>
                <input
                  type="password"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("password")}
                />
              </div>

              <div className="space-y-2">
                <label>Escolha o tipo de acesso</label>
                <select
                  {...register("provider")}
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md "
                  defaultValue="0"
                >
                  <option value="0">Selecione a opção</option>
                  <option value="corretor">Corretor</option>
                  <option value="proprietario">Proprietario</option>
                  <option value="usuario">Usuario</option>
                </select>
              </div>

              {corretorSelected ? (
                <div className="space-y-2">
                  <label htmlFor="">Insira o numero do seu Creci</label>
                  <input
                    type="test"
                    placeholder="Digite aqui"
                    className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                    {...register("creci")}
                  />
                </div>
              ) : null}

              <input
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                title="Send"
              />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
