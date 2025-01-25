"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import LocationForm from "./location-form";
import CreciForm from "./creci-form";
import AccessForm from "./access-form";
// import { axios } from "@/app/services/api";

const TOTAL_STEPS = 3;

type FormData = {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  neighborhood: string;
  state: string;
  zipCode: string;
  uf: string;
  confirmPassword: string;
  rg: string;
  cpf: string;
  birthDate: string;
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  

  // const submitForm = async () => {
  //   try {
  //     await axios.get("/");
  //     alert("Banco de dados contatado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao contatar o banco de dados:", error);
  //     alert("Erro ao contatar o banco de dados. Tente novamente mais tarde.");
  //   }
  // };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / TOTAL_STEPS) * 100;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const submitForm = async (formData: FormData) => {
      try {
        // Here you can handle the form submission, e.g., send data to an API
        console.log(formData); // Log the form data
        alert("Formulário enviado com sucesso!"); // Notify the user
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    };

    submitForm(data); // Call the submitForm function with the collected data
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Preencha os campos para cadastrar-se</CardTitle>
        <CardDescription>
          Etapa {step} de {TOTAL_STEPS}
        </CardDescription>
        <Progress value={progress} className="w-full mt-2 bg-purple-500" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 ? (
            <AccessForm
              register={register}
              errors={errors}
             
            />
          ) : step === 2 ? (
            <LocationForm
              register={register}
              errors={errors}
              
            />
          ) : (
            <CreciForm
              register={register}
              errors={errors}
              
            />
          )}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button
                type="button" // Prevents the button from submitting the form
                onClick={prevStep}
                variant="default"
                className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
              >
                Voltar
              </Button>
            )}
            {step < TOTAL_STEPS ? (
              <Button
                onClick={nextStep}
                className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
              >
                Próximo
              </Button>
            ) : (
              <Button
               
                className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
              >
                Enviar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
