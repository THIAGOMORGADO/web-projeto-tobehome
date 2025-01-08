/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Indica que este arquivo será renderizado no lado do cliente (Client Side Rendering - CSR)

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Importa componentes de UI personalizados

import { useForm, SubmitHandler } from "react-hook-form"; // Biblioteca usada para lidar com formulários
import { useEffect } from "react"; // Importa o hook useEffect para executar efeitos colaterais
import { User } from "../types/UserType"; // Define o tipo de dados esperado no formulário
import { useFormContext, FormActions } from "@/app/context/FormContext"; // Importa o contexto global e as ações disponíveis



import { useRouter } from "next/navigation";

export default function SignUp() {
  // Inicializa o formulário usando react-hook-form
  const { register, handleSubmit, watch } = useForm<User>();
  // Obtém o estado global e o método dispatch do contexto
  const { state, dispatch } = useFormContext();

  // Verifica se o tipo de usuário selecionado é "corretor"
  const corretorSelected = watch("provider") === "corretor";

  // useEffect para monitorar mudanças no estado do contexto
  useEffect(() => {
    console.log("Estado atualizado no contexto:", state); // Loga o estado do contexto sempre que for atualizado
  }, [state]); // Executa o efeito sempre que o `state` mudar

  // Função que será executada quando o formulário for submetido
  const onSubmit: SubmitHandler<User> = (data) => {
    console.log("Dados do formulário enviados:", data); // Exibe os dados enviados pelo formulário no console

    // Atualiza o contexto global com os valores enviados pelo formulário
    dispatch({ type: FormActions.setName, payload: data.name });
    dispatch({ type: FormActions.setEmail, payload: data.email });
    dispatch({ type: FormActions.setSenha, payload: data.password });
    dispatch({ type: FormActions.setProvider, payload: data.provider });

    // Se o tipo de usuário for "corretor", atualiza o campo "creci" no contexto
    if (data.provider === "corretor") {
      dispatch({ type: FormActions.setCreci, payload: data.creci });
    }
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {/* Container principal com estilos para centralizar o formulário */}
      <div className="flex items-center justify-center min-h-screen bg-[#030142]">
        {/* Componente de card para exibir o formulário */}
        <Card className="w-full max-w-md">
          {/* Cabeçalho do card */}
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Criar Conta,</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para se cadastrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Formulário com o método handleSubmit para processar o envio */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Campo de Nome */}
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("name")} // Registra este campo no react-hook-form
                />
              </div>

              {/* Campo de Email */}
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("email")} // Registra este campo no react-hook-form
                />
              </div>

              {/* Campo de Senha */}
              <div className="space-y-2">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  {...register("password")} // Registra este campo no react-hook-form
                />
              </div>

              {/* Campo para selecionar o tipo de acesso */}
              <div className="space-y-2">
                <label>Escolha o tipo de acesso</label>
                <select
                  {...register("provider")} // Registra este campo no react-hook-form
                  className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                  defaultValue="0"
                >
                  <option value="0">Selecione a opção</option>
                  <option value="corretor">Corretor</option>
                  <option value="proprietario">Proprietário</option>
                  <option value="usuario">Usuário</option>
                </select>
              </div>

              {/* Campo de Creci (aparece apenas para corretores) */}
              {corretorSelected ? (
                <div className="space-y-2">
                  <label htmlFor="creci">Insira o número do seu Creci</label>
                  <input
                    id="creci"
                    type="text"
                    placeholder="Digite aqui"
                    className="w-full h-13 border-2 border-zinc-700 p-2 rounded-md"
                    {...register("creci")} // Registra este campo no react-hook-form
                  />
                </div>
              ) : null}

              {/* Botão de Enviar */}
              <input
                type="submit" // Define o tipo como "submit" para enviar o formulário
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
