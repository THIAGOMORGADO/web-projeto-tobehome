/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
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
  CardFooter,
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
import Header from "@/app/components/Header";
import { toast } from "sonner";
import {
  User,
  Mail,
  Award,
  Home,
  MapPin,
  Building,
  MapPinned,
  HelpCircle,
} from "lucide-react";

const fieldIcons = {
  nome: User,
  email: Mail,
  creci: Award,
  endereco: Home,
  estado: MapPin,
  cidade: Building,
  bairro: MapPinned,
  local: MapPin,
  locacao: HelpCircle,
};

const placeholders: any = {
  nome: "Ex: João da Silva",
  email: "seu.email@exemplo.com",
  creci: "Ex: 123456-F",
  endereco: "Ex: Rua das Flores, 123",
  estado: "Ex: São Paulo",
  cidade: "Ex: São Paulo",
  bairro: "Ex: Centro",
  local: "Ex: São Paulo, SP",
  locacao: "Selecione uma opção",
  motivo1: "Selecione um motivo",
  motivo2: "Selecione um motivo",
  motivo3: "Selecione um motivo",
};

const motivosOptions = [
  "Interesse em crescimento profissional",
  "Possibilidade de trabalhar em equipe",
  "Identificação com os valores da empresa",
  "Busca por novos desafios",
  "Outros (especifique abaixo)",
];

const formSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  creci: z.string().min(2),
  endereco: z.string().min(2),
  estado: z.string().min(2),
  cidade: z.string().min(2),
  bairro: z.string().min(2),
  local: z.string().min(2),
  locacao: z.string().min(1),
  motivo1: z.string().min(1),
  motivo2: z.string().min(1),
  motivo3: z.string().min(1),
});

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      creci: "",
      endereco: "",
      estado: "",
      cidade: "",
      bairro: "",
      local: "",
      locacao: "",
      motivo1: "",
      motivo2: "",
      motivo3: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Valores enviados:", values);
      toast("Formulário enviado com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast("Erro ao enviar o formulário");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto my-10 shadow-lg">
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
                className="space-y-8"
              >
                {/* Nome, email, creci, etc. */}
                {[
                  "nome",
                  "email",
                  "creci",
                  "endereco",
                  "estado",
                  "cidade",
                  "bairro",
                  "local",
                ].map((field, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={field as keyof z.infer<typeof formSchema>}
                    render={({ field: fieldProps }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...fieldProps}
                              placeholder={
                                placeholders[field as keyof typeof placeholders]
                              }
                              className="pl-10 bg-[#ececec] border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            />
                            {fieldIcons[field as keyof typeof fieldIcons] && (
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                {React.createElement(
                                  fieldIcons[field as keyof typeof fieldIcons],
                                  { size: 18 }
                                )}
                              </span>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                ))}

                {/* Select para Motivo 1, Motivo 2, Motivo 3 */}
                {["motivo1", "motivo2", "motivo3"].map((field, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={field as keyof z.infer<typeof formSchema>}
                    render={({ field: fieldProps }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Select
                              onValueChange={(value) =>
                                fieldProps.onChange(value)
                              }
                              defaultValue={fieldProps.value}
                            >
                              <SelectTrigger className="bg-[#ececec] border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 pl-10">
                                <SelectValue
                                  placeholder={placeholders[field]}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {motivosOptions.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                ))}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
