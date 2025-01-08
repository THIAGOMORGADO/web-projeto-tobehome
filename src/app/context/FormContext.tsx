/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Step1 from "@/app/signup/page";
import Step2 from "@/app/signup2/page";

// Define os schemas para cada etapa
const stepSchemas = [
  z.object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z.string().email("Insira um e-mail válido."),
    phone: z.string().nonempty("O telefone é obrigatório."),
  }),
  z.object({
    age: z.number().min(18, "Você deve ter pelo menos 18 anos."),
    address: z.string().nonempty("O endereço é obrigatório."),
    city: z.string().nonempty("A cidade é obrigatória."),
  }),
  z.object({
    confirmation: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos." }),
    }),
    notes: z.string().optional(),
  }),
];

// Combina os schemas para validação completa no final
const combinedSchema = stepSchemas.reduce(
  (acc, curr) => acc.merge(curr),
  z.object({})
);

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({}); // Armazena os dados de todas as etapas
  const isLastStep = step === stepSchemas.length - 1;

  // Configuração do React Hook Form
  const methods = useForm({
    resolver: zodResolver(isLastStep ? combinedSchema : stepSchemas[step]),
    mode: "onChange",
    defaultValues: formData, // Define os valores padrão para manter os dados
  });

  const onSubmit = (data: Record<string, any>) => {
    // Atualiza o estado com os dados da etapa atual
    setFormData((prev) => ({ ...prev, ...data }));

    if (!isLastStep) {
      // Vai para a próxima etapa
      setStep((prev) => prev + 1);
    } else {
      // Envia os dados finais
      console.log("Dados do formulário:", { ...formData, ...data });
    }
  };

  const onBack = ({ children }) => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const steps = [<Step1 key="step1" />, <Step2 key="step2" />];

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default MultiStepForm;
