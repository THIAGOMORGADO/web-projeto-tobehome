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
import { FormData } from "@/app/types/User";
// import { axios } from "@/app/services/api";

const TOTAL_STEPS = 3;



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
    // Criar uma logica onde o bottao de enviar do ultimo step ele faz o submit quando for progress continue anadao com os step
    

  
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-purple-600 font-medium text-xl block">Preencha os campos para cadastrar-se</CardTitle>
        <CardDescription className="text-purple-600 font-medium block">
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
            <div className="w-full flex justify-between mt-6">
              {step > 1 && (
                <Button
                  type="button" // Prevents the button from submitting the form
                  onClick={prevStep}
                  variant="default"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  Voltar
                </Button>
              )}
              <Button
                onClick={step < TOTAL_STEPS ? nextStep : handleSubmit(onSubmit)}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                type={step < TOTAL_STEPS ? "button" : "submit"}
              >
                {step < TOTAL_STEPS ? "Próximo" : "Enviar"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
