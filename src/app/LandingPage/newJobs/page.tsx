"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/app/components/Header";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  endereco: z
    .string()
    .min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  creci: z
    .string()
    .min(3, { message: "CRECI deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  local: z
    .string()
    .min(2, { message: "Local deve ter pelo menos 2 caracteres" }),
  locacao: z.enum(["sim", "nao"], {
    required_error: "Por favor selecione uma opção",
  }),
  estado: z
    .string()
    .min(2, { message: "Estado deve ter pelo menos 2 caracteres" }),
  cidade: z
    .string()
    .min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
  bairro: z
    .string()
    .min(2, { message: "Bairro deve ter pelo menos 2 caracteres" }),
  motivo: z
    .string()
    .min(10, { message: "Motivo deve ter pelo menos 10 caracteres" }),
});

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      endereco: "",
      creci: "",
      email: "",
      local: "",
      locacao: undefined,
      estado: "",
      cidade: "",
      bairro: "",
      motivo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true); // Indica que o envio está em andamento

      // Simula uma chamada de API com um atraso de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Valores enviados:", values); // Log dos valores enviados para depuração

      // Exibe o toast de sucesso
      toast("Formulário enviado com sucesso! Entraremos em contato em breve.");

      // Reseta o formulário após o envio bem-sucedido
      form.reset();
    } catch (error) {
      // Caso haja um erro (opcional, em caso de chamada real à API)
      console.error("Erro ao enviar o formulário:", error);
      toast("Erro ao enviar o formulário");
    } finally {
      // Sempre encerra o estado de envio, independentemente do sucesso ou falha
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto my-10">
          <CardHeader className="bg-purple-100 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-purple-800">
              Corretor: Seja Nosso Parceiro
            </CardTitle>
            <CardDescription className="text-lg text-purple-600">
              Preencha o formulário abaixo para se tornar nosso parceiro
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="creci"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CRECI</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu número CRECI" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="estado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estado</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu estado" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bairro"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bairro</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu bairro" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="endereco"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Endereço</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu endereço" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="local"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Local de atuação</FormLabel>
                          <FormControl>
                            <Input placeholder="Cidade, Estado" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cidade</FormLabel>
                          <FormControl>
                            <Input placeholder="Sua cidade" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="locacao"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Já trabalha com imóvel de locação de temporada?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sim">Sim</SelectItem>
                              <SelectItem value="nao">Não</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="motivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Por que gostaria de trabalhar com a gente?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escreva aqui seus motivos"
                          className="min-h-[120px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
