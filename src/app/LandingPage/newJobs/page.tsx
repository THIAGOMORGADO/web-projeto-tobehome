"use client";

import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import Header from "@/app/components/Header";
import { toast } from "sonner";
import {
  User,
  Mail,
  Award,
  MapPin,
  Home,
  Building,
  MapPinned,
  HelpCircle,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

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

const fieldGroups = [
  { title: "Informações Pessoais", fields: ["nome", "email", "creci"] },
  { title: "Endereço", fields: ["endereco", "estado", "cidade", "bairro"] },
  { title: "Informações Profissionais", fields: ["local", "locacao"] },
  { title: "Motivação", fields: ["motivo"] },
];

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
  motivo: MessageSquare,
};

const placeholders = {
  nome: "Ex: João da Silva",
  email: "seu.email@exemplo.com",
  creci: "Ex: 123456-F",
  endereco: "Ex: Rua das Flores, 123",
  estado: "Ex: São Paulo",
  cidade: "Ex: São Paulo",
  bairro: "Ex: Centro",
  local: "Ex: São Paulo, SP",
  locacao: "Selecione uma opção",
  motivo: "Descreva por que você gostaria de trabalhar conosco...",
};

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedFields, setCompletedFields] = useState<string[]>([]);

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
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Valores enviados:", values);
      toast("Formulário enviado com sucesso! Entraremos em contato em breve.");
      form.reset();
      setCompletedFields([]);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast("Erro ao enviar o formulário");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldCompletion = (fieldName: string, isValid: boolean) => {
    setCompletedFields((prev) =>
      isValid
        ? [...new Set([...prev, fieldName])]
        : prev.filter((f) => f !== fieldName)
    );
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
                {fieldGroups.map((group, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.fields.map((field) => (
                        <FormField
                          key={field}
                          control={form.control}
                          name={field as keyof z.infer<typeof formSchema>}
                          render={({ field: fieldProps }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-gray-700 flex items-center">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                {completedFields.includes(field) && (
                                  <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                                )}
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  {field === "locacao" ? (
                                    <Select
                                      onValueChange={(value) => {
                                        fieldProps.onChange(value);
                                        handleFieldCompletion(field, !!value);
                                      }}
                                      defaultValue={fieldProps.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="bg-[#ececec] border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 pl-10">
                                          <SelectValue
                                            placeholder={placeholders[field]}
                                          />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="sim">Sim</SelectItem>
                                        <SelectItem value="nao">Não</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  ) : field === "motivo" ? (
                                    <Textarea
                                      placeholder={placeholders[field]}
                                      className="text-sm flex items-center justify-center resize-y pl-10 bg-[#ececec] border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                      {...fieldProps}
                                      onChange={(e) => {
                                        fieldProps.onChange(e);
                                        handleFieldCompletion(
                                          field,
                                          e.target.value.length >= 10
                                        );
                                      }}
                                    />
                                  ) : (
                                    <Input
                                      className="pl-10  bg-[#ececec] border-gray-900 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                      placeholder={
                                        placeholders[
                                          field as keyof typeof placeholders
                                        ]
                                      }
                                      {...fieldProps}
                                      onChange={(e) => {
                                        fieldProps.onChange(e);
                                        handleFieldCompletion(
                                          field,
                                          e.target.value.length >= 2
                                        );
                                      }}
                                    />
                                  )}
                                  {fieldIcons[
                                    field as keyof typeof fieldIcons
                                  ] && (
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                      {React.createElement(
                                        fieldIcons[
                                          field as keyof typeof fieldIcons
                                        ],
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
                    </div>
                  </div>
                ))}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              disabled={
                isSubmitting ||
                completedFields.length !== Object.keys(fieldIcons).length
              }
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
